import {getProductsDb, getProductDb, addProductDb, updateProductDb, deleteProductDb} from '../model/productsDb.js'
// get
const getProducts = async(req, res)=>{
 res.json(await getProductsDb())
}
const getProduct = async(req, res)=>{
 res.json(await getProductsDb(req.params.id))
}

// post
const addProduct = async(res,req)=>{
    let   {name, quantity, amount, category, prodUrl} = res.body
    // console.log(name)
await  addProductDb(name, quantity, amount, category, prodUrl)
}

// patch
const updateProduct = async(req,res)=>{
    // gets the values that were inserted through the form
 let   {name, quantity, amount, category, prodUrl} = req.body
 let    id = req.params.id
    //checks if the values are empty and returns the value that is in the database
let storedValue = await getProductDb(id)
name?name=name:name = storedValue[0].product_name
quantity?quantity=quantity:quantity = storedValue[0].quantity
amount?amount=amount:amount = storedValue[0].amount
category?category=category:category = storedValue[0].category
prodUrl?prodUrl=prodUrl:prodUrl = storedValue[0].prodUrl



    // gets the function from model
 await updateProductDb(name, quantity, amount, category, prodUrl, id)
    res.send('Item was updated successfully!!')

}

// delete
const deleteProduct = async(req,res)=>{
    res.json(await deleteProductDb(req.params.id))
    res.send('delete is successful');
}

export {getProducts, getProduct, addProduct,updateProduct, deleteProduct}