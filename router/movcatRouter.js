const router = require('express').Router()
const {getAllMovCat, addMovCat, deleteMovCat} = require('../controller/movcatController')

router.get('/all', getAllMovCat)
router.post('/add', addMovCat)
router.delete('/delete', deleteMovCat)
module.exports=router