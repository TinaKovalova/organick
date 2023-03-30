const db = require('../db.config');

const add = (req, res)=>{
    const query = "insert into `user` set ?";
    const params = {...req.body};
    db.query(query, params, (error, data)=>{
       if(error) return res.send(error);
       return res.json(data)
    } )
}
const getAll = (req, res)=>{
    const query = "select * from `user`";
    db.query(query, (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    });
}
const getByPhone=(req, res)=>{
    const query = "select * from `user` where phone= ?";
    db.query(query, req.params.phone, (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    })
}

module.exports ={
    add,
    getAll,
    getByPhone
}

