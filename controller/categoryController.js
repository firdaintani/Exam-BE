const db = require('../database')

module.exports={
    getAllCategories : (req,res)=>{
        var sql = `select * from categories`
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
    addCategories : (req,res)=>{
        var sql = `select nama from categories where nama='${req.body.nama}'`
        db.query (sql, (err,result)=>{
            try{
                if(result.length>0){
                    res.send('kategori sudah ada')
                }else{
                    var sql1 = `insert into categories set ?`
                    db.query(sql1,req.body, (err1,result)=>{
                        
                        if(err1) throw err1
                        res.redirect('/categories/all')
                        
                    })
    
                }
        
            }
            catch(err){
                res.send(err)
            }

        })
    },
    editCategories : (req,res)=>{
        var id = req.params.id
        var sql = `update categories set ? where id=${id}`
        db.query(sql,req.body, (err,result)=>{
            try{
                if(err) throw err
                res.redirect('/categories/all')
            }
            catch(err){
                res.send(err)
            }
        })
    },
    deleteCategories : (req,res)=>{
        var id = req.params.id
        var sql = `delete from categories where id=${id}`
        db.query(sql, (err,result)=>{
            try{
                if(err) throw err
                res.redirect('/categories/all')
            }
            catch(err){
                res.send(err)
            }
        }) 
    }
}