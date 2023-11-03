import axios from 'axios'

const url = "https://fakestoreapiserver.reactbd.com/products";
const res = await axios.get(url);
export default res.data;
// export default async function productsData(){
//     const res = await axios.get(url);
//     return res.data;
// } 