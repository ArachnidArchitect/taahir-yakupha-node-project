import {getusersDb, getuserDb, adduserDb, updateuserDb, deleteuserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'
// get
const getusers = async(req, res)=>{
 res.json(await getusersDb())
}
const getuser = async(req, res)=>{
 res.json(await getusersDb(req.params.id))
}

// post
const adduser = async(req,res)=>{
    // gets the values from the form
    let   {fname, lname, age, gender, role, email, password, profile} = req.body

    // hashes the password and the 
    let encryptedPass = await hash(password, 10)
    console.log(encryptedPass);
    if(encryptedPass.stack) throw (encryptedPass)
    // console.log(name)
await  adduserDb(fname, lname, age, gender, role, email, encryptedPass, profile)
res.send('user was added')
}

// patch
const updateuser = async(req,res)=>{
    // gets the values that were inserted through the form
 let   {name, quantity, amount, category, prodUrl} = req.body
 let    id = req.params.id
    //checks if the values are empty and returns the value that is in the database
let storedValue = await getuserDb(id)
name?name=name:name = storedValue[0].user_name
quantity?quantity=quantity:quantity = storedValue[0].quantity
amount?amount=amount:amount = storedValue[0].amount
category?category=category:category = storedValue[0].category
prodUrl?prodUrl=prodUrl:prodUrl = storedValue[0].prodUrl



    // gets the function from model
 await updateuserDb(name, quantity, amount, category, prodUrl, id)
    res.send('Item was updated successfully!!')

}

// delete
const deleteuser = async(req,res)=>{
    res.json(await deleteuserDb(req.params.id))
    res.send('delete is successful');
}

// login
const loginUser = (req, res)=>{
    res.json({
        message:"you have signed in!!",
        token:req.body.token
    })

}
export {getusers, getuser, adduser,updateuser, deleteuser,loginUser}