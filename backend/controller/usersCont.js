import {getusersDb, getuserDb, adduserDb, updateuserDb, deleteuserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'
// get
const getusers = async(req, res)=>{
 res.json(await getusersDb())
}
const getuser = async(req, res)=>{
 res.json(await getuserDb(req.params.id))
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
 let   {fname, lname, age, gender, role, email, password, profile} = req.body
 let    id = req.params.id
    //checks if the values are empty and returns the value that is in the database
let storedValue = await getuserDb(id)
console.log(storedValue)
fname?fname=fname:fname = storedValue[0].first_name
lname?lname=lname:lname = storedValue[0].last_name
age?age=age:age = storedValue[0].user_age
gender?gender=gender:gender = storedValue[0].gender
role?role=role:role = storedValue[0].user_role
email?email=email:email = storedValue[0].email_add
password?password=password:password = storedValue[0].user_pass
profile?profile=profile:profile = storedValue[0].user_profile



    // gets the function from model
 await updateuserDb(fname, lname, age, gender, role, email, password, profile, id)
    res.send('Item was updated successfully!!')

}

// delete
const deleteuser = async(req,res)=>{
    await deleteuserDb(req.params.id)
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