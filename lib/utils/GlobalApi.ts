import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY;


const axiosClient = axios.create({
    baseURL,
    headers: {'Authorization': `Bearer ${apiKey}`}
  
});

const getAllProducts = axiosClient.get('products?populate=*')

export {
    getAllProducts
};