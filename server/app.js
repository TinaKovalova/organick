const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')});
const port = process.env.PORT || 3000;


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>res.send('Organick') );

const productRoutes = require('./routes/product.routes');
app.use('/product',productRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/user',userRoutes);


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

