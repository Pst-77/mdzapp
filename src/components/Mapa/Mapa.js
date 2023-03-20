import React from 'react';
import { API_KEY } from '../../config';
import Button from '@mui/material/Button';

class Mapa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.mapRef = React.createRef();
    this.inputRef = React.createRef();
    this.state = {
      map: null,
      marker: null,
      autocomplete: null,
      lat: '', lng: '' , distanciaPedido:null, CostoEnvio:null
    };
  }

  
  
calculaDistanciaPedido = async(lat, lng) => {
  var myHeaders = new Headers();
  var calculaDistancia = {
    "origin":{
      "location":{
        "latLng":{
          "latitude": 20.9976037,
          "longitude": -89.5610876
        }
      }
    },
    "destination":{
      "location":{
        "latLng":{
          "latitude": lat,
          "longitude": lng
        }
      }
    },
    "travelMode": "DRIVE",
    "routingPreference": "TRAFFIC_AWARE",
    "departureTime": "2023-10-15T15:01:23.045123456Z",
    "computeAlternativeRoutes": false,
    "routeModifiers": {
      "avoidTolls": false,
      "avoidHighways": false,
      "avoidFerries": false
    },
    "languageCode": "en-US",
    "units": "IMPERIAL"

  } 
  //myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc3NDQwNTk2LCJleHAiOjE2Nzc3NDA1OTZ9.BEe8f52SKQcLL7E2ghZIWq22lkv-Gyv79eGkby4GSGs");
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("X-Goog-Api-Key", API_KEY)
  myHeaders.append("X-Goog-FieldMask", "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline")
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(calculaDistancia),
    headers: myHeaders,
    redirect: 'follow'
  };
  // peticion asincrona (si espera) 
  var fetchApi = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes", requestOptions)
    .then(response=> response.json())
    .then(result=> result.routes[0].distanceMeters)
    .catch(error => console.log('error', error));
  return fetchApi;
}



  updateLatLong = (lat, lng) => {
    this.setState({ lat: lat, lng: lng });
    this.calculaDistanciaPedido(lat, lng).then(res=>{console.log("distancia", res);
    let costoEnvio = null;
    if (res > 40000) {
      costoEnvio = 1000;
    } else if (res > 20000) {
      costoEnvio = 500;
    }
    this.setState({ CostoEnvio: costoEnvio });
    });
  }

  


  componentDidMount() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const argCoords = {lat: 20.959170296690033, lng: -89.62331563714278};
      const mapDiv = this.mapRef.current;
      const input = this.inputRef.current;

      const map = new window.google.maps.Map(mapDiv, {
        center: argCoords,
        zoom: 14
      });

      const marker = new window.google.maps.Marker({
        position: argCoords,
        map: map
      });

      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        console.log(place);
       //this.props.updateLocation(place.geometry.location.lat(), place.geometry.location.lng())
       this.updateLatLong(place.geometry.location.lat(), place.geometry.location.lng());
       


      });
      
      this.setState({
        map: map,
        marker: marker,
        autocomplete: autocomplete
      });
    };
  }

  render() {
    const name=this.props.name;
    const phone= this.props.phone;
    console.log("props", name, phone)
    return (
      <div>
        <br></br>
        <input type="text" id="place_input" placeholder="Dirección de envio" 
        style={{ height: '5vh', width:'100%', borderRadius:5, border: '1px solid gray', padding:'3vh', outline: 'none', transition: 'border-color 0.2s ease-in-out' }}
        onFocus={(event) => { event.target.style.borderColor = 'blue'; }}
        onBlur={(event) => { event.target.style.borderColor = 'gray'; }}
        className="input"
        ref={this.inputRef}
        />
     
        <br></br>
        <br></br>
        <div id="map" style={{height: '56vh', width:'100%'}} ref={this.mapRef} />
        <br></br>
        
        <div className="button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button className='btn-ps-pg' variant="outlined"  
            style={{cursor: 'default' ,  fontSize: '2.5vh', fontWeight: 'bold', width: '70vh', height:'5vh', backgroundColor:'#0AC269', color: 'white','&:hover': { backgroundColor: 'lightblue', boxShadow: '0px 0px 10px lightblue'}}}>
             {this.state.CostoEnvio ? `Costo de envio: $ ${this.state.CostoEnvio}` : 'Costo de envio $'}
          </Button>  
        </div>
        <br></br>
        <div className="button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button className='btn-ps-pg' variant="outlined" type="submit" value="Siguiente"
            style={{width: '20vh', fontSize: '2.5vh', fontWeight: 'bold', backgroundColor:'#1976d2', color: 'white','&:hover': { backgroundColor: 'lightblue', boxShadow: '0px 0px 10px lightblue'}}}>
            Aceptar
            </Button>
        </div> 
  
        </div>
        
    );
  }
}

export default Mapa;
