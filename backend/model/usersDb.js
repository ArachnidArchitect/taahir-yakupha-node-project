import {pool} from '../config/config.js'


const getusersDb = async()=>{
    let [data] = await  pool.query('SELECT * FROM users')
    return data
}
// get by id
const getuserDb = async(id)=>{
    let [data] = await  pool.query('SELECT * FROM users WHERE users_id=?',[id])
    return data
}
// post
const adduserDb = async(name, quantity, amount, category,prodUrl)=>{
    await pool.query('INSERT INTO users(user_name, quantity, amount, category, prodUrl) VALUES(?,?,?,?,?)',[name, quantity, amount, category,prodUrl])
}

// patch
const updateuserDb = async(name,quantity, amount, category, prodUrl, id)=>{
    await pool.query('UPDATE users SET user_name = ?, quantity=?, amount=?, category=?, prodUrl = ? WHERE users_id = ?', [name,quantity, amount, category, prodUrl, id])
}
// delete
const deleteuserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE users_id = ?', [id])
}


export {getusersDb,getuserDb,adduserDb, updateuserDb, deleteuserDb}

