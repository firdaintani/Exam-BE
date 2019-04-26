const db = require('../database')


module.exports={
    getAllMovCat : (req,res)=>{
        var sql = `select m.nama as title, c.nama as category from movcat mc join movies m on mc.idmovie=m.id join categories c on mc.idcategory=c.id`
        db.query(sql, (err,result)=>{
            try{
                if(err) throw err
                res.send(result)
            }
            catch(err){
                res.send(err)
            }
        })
    },
    addMovCat : (req,res)=>{
        var sql = `select * from movcat where idmovie=${req.body.idmovie} and idcategory=${req.body.idcategory}`
        db.query(sql, (err,result)=>{
            try{
                if(result.length>0){
                    res.send('Data sudah ada')
                }else{
                    var sql1 = `insert into movcat set ?`
                    db.query(sql1,req.body, (err1,result1)=>{
                            if(err1) throw err1
                            res.redirect('/movcat/all')
                    })    
                }
            }        
            catch(err){
                res.send(err)
            }
        })
    },
    deleteMovCat: (req,res)=>{
        var idmovie = req.query.idmovie
        var idcategory = req.query.idcategory
        var sql = `delete from movcat where idmovie=${idmovie} and idcategory=${idcategory}`
        db.query(sql, (err,result)=>{
            try{
                if(err) throw err
                res.redirect('/movcat/all')
            }
            catch(err){
                res.send(err)
            }
        }) 
    }
}