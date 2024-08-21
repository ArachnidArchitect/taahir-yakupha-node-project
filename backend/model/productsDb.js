import {pool} from '../config/config.js'


const getProductsDb = async()=>{
    let [data] = await  pool.query('SELECT * FROM products')
    return data
}
// get by id
const getProductDb = async(id)=>{
    let [data] = await  pool.query('SELECT * FROM products WHERE products_id=?',[id])
    return data
}
// post
const addProductDb = async(name, quantity, amount, category,prodUrl)=>{
    await pool.query('INSERT INTO products(product_name, quantity, amount, category, prodUrl) VALUES(?,?,?,?,?)',[name, quantity, amount, category,prodUrl])
}

// patch
const updateProductDb = async(name,quantity, amount, category, prodUrl, id)=>{
    await pool.query('UPDATE products SET product_name = ?, quantity=?, amount=?, category=?, prodUrl = ? WHERE products_id = ?', [name,quantity, amount, category, prodUrl, id])
}
// delete
const deleteProductDb = async(id)=>{
    await pool.query('DELETE FROM products WHERE products_id = ?', [id])
}


export {getProductsDb,getProductDb,addProductDb, updateProductDb, deleteProductDb}

/*`products_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`product_name` VARCHAR(40),
`quantity` INT,
`amount` DECIMAL(18,2),
`category` VARCHAR(30),
`prodUrl` TEXT*/