const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')});
const port = process.env.PORT || 3000;
const products = require('./controllers/product.controller');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>res.send('Organick') );

app.get('/product', products.getAll)
app.get('/product/:id', products.getById)
app.delete('/product/:id', products.remove)
app.put('/product/:id', products.update)
app.post('/product', products.add)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});
//test data
// {
//     "categoryId":3,
//     "productName":"tomato",
//     "price":25.00,
//     "discount":null,
//     "star":0,
//     "imagePath":null
// }

