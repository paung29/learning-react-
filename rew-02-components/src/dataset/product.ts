export type ProductDto = {
    id:number,
    name:string,
    category:string,
    image:string,
    price:number
}

export const products:ProductDto[] = [
    {id:1, name:"Hoddie", category:"shirt", price:15000, image:"product1.jpg"},
    {id:2, name:"Sun", category:"Planet", price:20000, image:"product2.jpeg"},
    {id:3, name:"Women", category:"Human", price:21000, image:"product3.jpg"},
    {id:4, name:"Men", category:"Human", price:16000, image:"product4.jpeg"}
]