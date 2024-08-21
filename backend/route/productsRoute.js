import express from 'express'
import {getProducts, getProduct, addProduct, updateProduct,deleteProduct} from '../controller/productsConts.js'

const router = express.Router()

router.get('/',getProducts)
// get by id
router.get('/:id',getProduct)
// post
router.post('/addProduct',addProduct)
// patch
router.patch('/update/:id', updateProduct)
// delete
router.delete('/delete/:id', deleteProduct)

export default router