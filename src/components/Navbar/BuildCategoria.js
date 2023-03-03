
export default async function BuildCategoria() {    
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc3NDQwNTk2LCJleHAiOjE2Nzc3NDA1OTZ9.BEe8f52SKQcLL7E2ghZIWq22lkv-Gyv79eGkby4GSGs");
var requestOptions = {
  method: 'GET',
  //headers: myHeaders,
  redirect: 'follow'
};

// peticion asincrona (si espera) 
  var fetchApi = await fetch("https://api-production-067d.up.railway.app/api/get/Optionscategorias", requestOptions)
  .then(response => response.json())
  .then(result => result.data)
  .catch(error => console.log('error', error));
  
  return fetchApi;  
}



/*
    const _categoria= [
        {
            "id": 1,
            "nombre": "Impermiabilizantes",
            "categoria": "Recubrimiento",
            "descripcion": "Impermeabilizantes",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T23:42:14.000Z",
            "activo": "si",
            "url_foto": "https://ejemplo.com/foto.jpg"
        },
        {
            "id": 2,
            "nombre": "Block",
            "categoria": "Concreto",
            "descripcion": "Block ",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T22:27:19.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 3,
            "nombre": "Vigueta",
            "categoria": "Concreto",
            "descripcion": "Estructura de concreto",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T22:27:49.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 4,
            "nombre": "Ptr's",
            "categoria": "Acero",
            "descripcion": "Estructuras metalicas",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T22:28:48.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 5,
            "nombre": "Bobedilla",
            "categoria": "Concreto",
            "descripcion": "Superficie de concreto",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T22:30:00.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 6,
            "nombre": "Varilla",
            "categoria": "Acero",
            "descripcion": "Estructura metalica ",
            "status": "Activo",
            "createat": "2023-02-03T13:12:08.000Z",
            "uptadeat": "2023-02-27T22:52:59.000Z",
            "activo": "si",
            "url_foto": "C:\\fakepath\\descarga - copia.jpg"
        },
        {
            "id": 7,
            "nombre": "Cemento",
            "categoria": "Concreto",
            "descripcion": "Cementos gris",
            "status": "Activo",
            "createat": "2023-02-03T13:16:14.000Z",
            "uptadeat": "2023-02-27T22:36:36.000Z",
            "activo": "si",
            "url_foto": "no hay "
        },
        {
            "id": 8,
            "nombre": "Generico",
            "categoria": "Acero",
            "descripcion": "Aceros Genericos",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T22:51:40.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 9,
            "nombre": "Derivados de Alambron",
            "categoria": "Acero",
            "descripcion": "Prod. derivados de alambron",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-02-27T23:01:31.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 10,
            "nombre": "Mosaico",
            "categoria": "Azulejos",
            "descripcion": "Azulejos en mosaico",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-01-21T14:38:41.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 11,
            "nombre": "Negro",
            "categoria": "Acero",
            "descripcion": "Acero negro",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-01-21T14:38:41.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 12,
            "nombre": "Pino",
            "categoria": "Madera",
            "descripcion": "Madera de pino",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-01-21T14:38:41.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 13,
            "nombre": "Rojo",
            "categoria": "Ladrillo",
            "descripcion": "Ladrillo rojo",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-01-21T14:38:41.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 14,
            "nombre": "Templado",
            "categoria": "Vidrio",
            "descripcion": "Vidrio templado",
            "status": "activo",
            "createat": "2023-01-21T14:38:41.000Z",
            "uptadeat": "2023-01-21T14:38:41.000Z",
            "activo": "si",
            "url_foto": "https://via.placeholder.com/150"
        },
        {
            "id": 15,
            "nombre": "Genericoa",
            "categoria": "Generico",
            "descripcion": "Productos sin categoria",
            "status": "Activo",
            "createat": "2023-02-19T10:56:49.000Z",
            "uptadeat": "2023-02-28T00:00:15.000Z",
            "activo": "si",
            "url_foto": "https://ejemplo.com/foto.jpg"
        }
    ]

    export {_categoria}



*/