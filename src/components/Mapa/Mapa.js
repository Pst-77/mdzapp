import React from 'react';
import { API_KEY } from '../../config';

class Mapa extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.inputRef = React.createRef();
    this.state = {
      map: null,
      marker: null,
      autocomplete: null
    };
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
        console.log(place.geometry.location.lat());
        console.log(place.geometry.location.lng());
        marker.setPosition(place.geometry.location);
      });

      this.setState({
        map: map,
        marker: marker,
        autocomplete: autocomplete
      });
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="place_input"
          placeholder="      Ingresa una ubicación..."
          style={{height: '5vh', width:'100%', borderRadius:10}}          
          className="input"
          ref={this.inputRef}
        />
        <br></br>
        <br></br>
        <br></br>
        <div
          id="map"
          style={{height: '56vh', width:'100%'}}
          ref={this.mapRef}
        />
      </div>
    );
  }
}

export default Mapa;
