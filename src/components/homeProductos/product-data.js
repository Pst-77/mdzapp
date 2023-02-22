export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide:3,  
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
       items: 1,
    }
  };



const _products =[
   
{
    id:50,
    name:"Block 30x15x12",
    productType:"Concretos",
    price:15,
    rating:2,
    image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMzc2OTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gyNC84ODk5OTIyOTg0OTkwLmpwZ3w2NGY5MzU0ZjMyYjk0ZmZkYmI5ZDMzZWI3MzhkM2Y4ZWVhOTNiNjBiMjM3MDkzZjZiNjQwZDFjMjY2YjZjN2Y4",
    description:"Bloc hueco Mitza ",
},
{
    id:60,
    name:"Malla Electrosoldada 6x6 10-10",
    productType:"Aceros",
    price:814,
    rating:1,
    image:"https://rogonsa.com.mx/wp-content/uploads/2021/02/malla_electrosoldada.png",
    description:"Cemento con fraguado rapido",
},
{
    id:70,
    name:"Armex 12-20",
    productType:"Aceros",
    price:235,
    rating:4,
    image:"https://rogonsa.com.mx/wp-content/uploads/2021/02/castillo_armex.png",
    description:"Cemento con fraguado rapido",
},
{
    id:80,
    name:"Cemento Maya",
    productType:"Concretos",
    price:257,
    rating:4,
    image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
    description:"Cemento con fraguado rapido",
},

{
  id:90,
  name:"Block 30x15x12",
  productType:"Concretos",
  price:15,
  rating:2,
  image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMzc2OTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gyNC84ODk5OTIyOTg0OTkwLmpwZ3w2NGY5MzU0ZjMyYjk0ZmZkYmI5ZDMzZWI3MzhkM2Y4ZWVhOTNiNjBiMjM3MDkzZjZiNjQwZDFjMjY2YjZjN2Y4",
  description:"Bloc hueco Mitza ",
},
{
  id:100,
  name:"Malla Electrosoldada 6x6 10-10",
  productType:"Aceros",
  price:814,
  rating:1,
  image:"https://rogonsa.com.mx/wp-content/uploads/2021/02/malla_electrosoldada.png",
  description:"Cemento con fraguado rapido",
},
{
  id:110,
  name:"Armex 12-20",
  productType:"Aceros",
  price:235,
  rating:4,
  image:"https://rogonsa.com.mx/wp-content/uploads/2021/02/castillo_armex.png",
  description:"Cemento con fraguado rapido",
},
{
  id:120,
  name:"Cemento Maya",
  productType:"Concretos",
  price:257,
  rating:4,
  image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
  description:"Cemento con fraguado rapido",
},


{
  id:300,
  name:"Cemento Maya",
  productType:"Concretos",
  price:257,
  rating:4,
  image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
  description:"Cemento con fraguado rapido",
},

{
id:301,
name:"Block 30x15x12",
productType:"Concretos",
price:15,
rating:2,
image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMzc2OTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gyNC84ODk5OTIyOTg0OTkwLmpwZ3w2NGY5MzU0ZjMyYjk0ZmZkYmI5ZDMzZWI3MzhkM2Y4ZWVhOTNiNjBiMjM3MDkzZjZiNjQwZDFjMjY2YjZjN2Y4",
description:"Bloc hueco Mitza ",
},
{
id:302,
name:"Malla Electrosoldada 6x6 10-10",
productType:"Aceros",
price:814,
rating:1,
image:"https://rogonsa.com.mx/wp-content/uploads/2021/02/malla_electrosoldada.png",
description:"Cemento con fraguado rapido",
},
{
id:303,
name:"Armex 12-20",
productType:"Aceros",
price:235,
rating:4,
image:"https://rogonsa.com.mx/wp-content/uploads/2021/02/castillo_armex.png",
description:"Cemento con fraguado rapido",
},
{
id:304,
name:"Cemento Maya",
productType:"Concretos",
price:257,
rating:4,
image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
description:"Cemento con fraguado rapido",
},

{
  id:305,
  name:"Cemento Maya",
  productType:"Concretos",
  price:257,
  rating:4,
  image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
  description:"Cemento con fraguado rapido",
  },
  
  {
    id:306,
    name:"Cemento Maya",
    productType:"Concretos",
    price:257,
    rating:4,
    image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
    description:"Cemento con fraguado rapido",
    },
    
    {
      id:307,
      name:"Cemento Maya",
      productType:"Concretos",
      price:257,
      rating:4,
      image:"https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w4NDg3MHxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaGUyLzg5NjkxMjM4ODkxODIuanBnfDNhYzExMzhmYzY2OGIzNzhiOGE2Njg2MTA3ZDg2OTVkNzA2ZTE2MGE4OGU2ZjQ0OGY1ZjU0MGYzMzQ3ZTYzNzU",
      description:"Cemento con fraguado rapido",
      },
      
            


]

export {_products};