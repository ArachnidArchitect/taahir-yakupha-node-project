import express from 'express'
import {getusers, getuser, adduser, updateuser,deleteuser} from '../controller/usersCont.js'

const router = express.Router()

router.get('/',getusers)
// get by id
router.get('/:id',getuser)
// post
router.post('/adduser',adduser)
// patch
router.patch('update/:id', updateuser)
// delete
router.delete('/delete/:id', deleteuser)

export default router