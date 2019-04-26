const router = require('express').Router()
const {getAllCategories, addCategories, editCategories, deleteCategories} = require('../controller/categoryController')

router.get('/all', getAllCategories)
router.post('/add', addCategories)
router.put('/edit/:id', editCategories)
router.delete('/delete/:id', deleteCategories)
module.exports=router