
const Apitemlocal =

    [
        {
            "categoria": "Aceros",
            "subcategorias": "Derivados de Alambron, Generico, Varilla, Ptr's"
        },
        {
            "categoria": "Concretos",
            "subcategorias": "Cementos, Bovedillas, Viguetas, Block's"
        },
        {
            "categoria": "Maderas",
            "subcategorias": "Pino"
        },
        {
            "categoria": "Recubrimientos",
            "subcategorias": "Impermiabilizantes"
        },
        {
            "categoria": "Vidrios",
            "subcategorias": "Templados"
        }
    ]


export default async function BuildCategoria() {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc3NDQwNTk2LCJleHAiOjE2Nzc3NDA1OTZ9.BEe8f52SKQcLL7E2ghZIWq22lkv-Gyv79eGkby4GSGs");
    var requestOptions = {
        method: 'GET',
        //headers: myHeaders,
        redirect: 'follow'
    };

    // peticion asincrona (si espera) 
    var fetchApi = await fetch("https://adamant-reaction-production-44c6.up.railway.app/api/get/Optionscategorias", requestOptions)
        .then(response => response.json())
        .then(result => result.data)
        .catch(error => console.log('error', error));

    return fetchApi;
}



