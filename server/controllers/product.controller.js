const db = require('../db.config');


const getAll = (req, res)=>{
    const query = 'select * from product';
    db.query(query, (error, data)=>{
        if(error) return res.send(error.status);
        return res.json(data)
    });
}

const getById=(req, res)=>{
    const query = `select * from product where id =?`;
    db.query(query, req.params.id, (error, data)=>{
        if(error) return res.send(error.status);
        return res.json(data)
    })
}

const remove=(req, res)=>{
    const query = `delete from product where id =?`;
    db.query(query,[req.params.id], (error, data)=>{
        if(error) return res.send(error.status);
        return res.json(data)
    })
}
const add = (req, res)=>{
    const query = `insert into product(categoryId, productName, price, discount, star, imagePath) values (?)`;
    const params = [
        req.body.categoryId,
        req.body.productName,
        req.body.price,
        req.body.discount,
        req.body.star,
        req.body.imagePath
    ]
    db.query(query, [params], (error, data)=>{
       if(error) return res.send(error.status);
       return res.json(data)
    } )

}

const update = (req, res)=>{
    console.log(req.body, req.params)
     const query = `update product set categoryId="${req.body.categoryId}",productName="${req.body.productName}", price="${req.body.price}", discount=null, star="${req.body.star}", imagePath="${req.body.imagePath}" where id="${req.params.id}"`;
   ///discount???
     db.query(query,(error, data)=>{
        if(error) return res.send(error.status);
        return res.json(data)
     } )

}

module.exports ={
    getAll,
    getById,
    add,
    remove,
    update
}

