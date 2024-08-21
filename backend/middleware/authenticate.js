import { compare } from "bcrypt"
import { getEmailDb } from "../model/usersDb.js"
import {config} from 'dotenv'
import jwt from 'jsonwebtoken'

config()
const checkUser = async (req,res,next)=>{
    const {email,password} = req.body;
    let hashedPassword = await getEmailDb(email)
    console.log('email'+email);
    console.log('password'+password);
    console.log('hashed', hashedPassword[0].user_pass);
    
    compare(password,hashedPassword[0].user_pass,(err,result)=>{
        if(err){
            console.log(hashedPassword[0].password)
            res.send("Password incorrect")
        } else{
            let token = jwt.sign({email:email}, process.env.SECRET_KEY, {expiresIn:'1h'})
            console.log(token)
            req.body.token = token
            next()
        }
    })
}
export {checkUser}