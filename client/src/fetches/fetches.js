import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4004';


export async function getAllProducts(){
   return await axios.get('/product');
}

export async function getCategoryById(id){
   return await axios.get(`/category/${id}`);
}

export async function addUser(user){
  return await axios.post('/user', user)
}
 export async function addOrder(order){
   return await axios.post('/order', order);
 }
