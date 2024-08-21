import {pool} from '../config/config.js'


const getusersDb = async()=>{
    let [data] = await  pool.query('SELECT * FROM users')
    return data
}
// get by id
const getuserDb = async(id)=>{
    let [data] = await  pool.query('SELECT * FROM users WHERE user_id=?',[id])
    return data
}
// get by email
const getEmailDb = async(email)=>{
    let [data] = await  pool.query('SELECT * FROM users WHERE email_add = ?',[email])
     console.log('test1', data)
     return data
}
// post
const adduserDb = async(first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile)=>{
    await pool.query('INSERT INTO users(first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile) VALUES(?,?,?,?,?,?,?,?)',[first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile])
}

// patch
const updateuserDb = async(first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile, id)=>{
    await pool.query('UPDATE users SET first_name = ?, last_name=?, user_age=?, gender=?, user_role = ?,email_add=?, user_pass=?, user_profile  WHERE user_id = ?', [first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile, id])
}
// delete
const deleteuserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE user_id = ?', [id])
}


export {getusersDb, getEmailDb, getuserDb,adduserDb, updateuserDb, deleteuserDb}

