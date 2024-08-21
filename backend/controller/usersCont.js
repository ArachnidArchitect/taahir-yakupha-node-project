import {getusersDb, getuserDb, adduserDb, updateuserDb, deleteuserDb} from '../model/usersDb.js'
// get
const getusers = async(req, res)=>{
 res.json(await getusersDb())
}
const getuser = async(req, res)=>{
 res.json(await getuserDb(req.params.id))
}

// post
const adduser = async(res,req)=>{
    let   {name, quantity, amount, category, prodUrl} = res.body
    // console.log(name)
await  adduserDb(name, quantity, amount, category, prodUrl)
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

export {getusers, getuser, adduser,updateuser, deleteuser}