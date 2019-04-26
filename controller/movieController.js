const db = require('../database')

module.exports={
    getAllMovie : (req,res)=>{
        var sql = `select * from movies`
        db.query(sql,(err,result)=>{
            try{
                if(err) throw err
                res.send(result)
            }
            catch(err){
                res.send(err)
            }
        })
    },
    addMovie : (req,res)=>{
        var sql = `insert into movies set ?`
        db.query(sql,req.body, (err,result)=>{
            try{
                if(err) throw err
                res.redirect('/movie/all')
            }
            catch(err){
                res.send(err)
            }
        })
    },
    editMovie : (req,res)=>{
        var id = req.params.id
        var sql = `update movies set ? where id=${id}`
        db.query(sql,req.body, (err,result)=>{
            try{
                if(err) throw err
                res.redirect('/movie/all')
            }
            catch(err){
                res.send(err)
            }
        })
    },
    deleteMovie : (req,res)=>{
        var id = req.params.id
        var sql = `delete from movies where id=${id}`
        db.query(sql, (err,result)=>{
            try{
                if(err) throw err
                res.redirect('/movie/all')
            }
            catch(err){
                res.send(err)
            }
        }) 
    }
}