const router = require('express').Router()
const {getAllMovie, addMovie, editMovie, deleteMovie} = require('../controller/movieController')

router.get('/all', getAllMovie)
router.post('/add', addMovie)
router.put('/edit/:id', editMovie)
router.delete('/delete/:id', deleteMovie)
module.exports=router