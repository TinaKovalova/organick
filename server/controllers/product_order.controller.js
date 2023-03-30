const db = require('../db.config');


const getAll = (req, res)=>{
    const query = 'select * from product_order';
    db.query(query, (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    });
}

const getById=(req, res)=>{
    const query = `select * from product_order where id =?`;
    db.query(query, req.params.id, (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    })
}

const remove=(req, res)=>{
    const query = `delete from product_order where id =?`;
    db.query(query,[req.params.id], (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    })
}
const add = (req, res)=>{
    const query = `insert into product_order set ?`;
    const params = {...req.body};
    db.query(query, params, (error, data)=>{
       if(error) return res.send(error);
       return res.json(data);
    } )
}

const update = (req, res)=>{
     const query = `update product_order set ? where id=?`;
     db.query(query,[{...req.body}, req.params.id],(error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
     } )
}

module.exports ={
    getAll,
    getById,
    add,
    remove,
    update
}

