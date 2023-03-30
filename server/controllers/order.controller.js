const db = require('../db.config');

const add = (req, res)=>{
    new Promise((resolve, reject)=>{
        const orderQuery ="insert into `order` (`date`) values (now())";
       db.query(orderQuery, new Date().toLocaleDateString(),(error, data)=>{
        if(error) return res.send(error);
        resolve(data)
        })
    }).then(insertedData =>{
        const query = `insert into product_order set ?`;
        const params = {orderId: insertedData.insertId, ...req.body};
        db.query(query, params, (error, data)=>{
            if(error) return res.send(error);
           return res.json(data);
        } )

    })
}


module.exports ={
    add
}

