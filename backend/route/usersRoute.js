import express from 'express'
import {getusers, getuser, adduser, updateuser,deleteuser, loginUser} from '../controller/usersCont.js'
import { checkUser } from '../middleware/authenticate.js'

const router = express.Router()

router.get('/',getusers)
// get by id
router.get('/:id',getuser)
// post
router.post('/register',adduser)
// patch
router.patch('/update/:id', updateuser)
// delete
router.delete('/delete/:id', deleteuser)
// login
router.post('/login',checkUser,loginUser)
export default router