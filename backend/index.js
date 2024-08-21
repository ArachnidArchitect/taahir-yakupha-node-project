import express from 'express'
import productsRoute from './route/productsRoute.js'
import usersRoute from './route/usersRoute.js'

const app = express()

const port = process.env.PORT || 7000

// middleware
app.use(express.json())
app.use('/products', productsRoute)
app.use('/users', usersRoute)


app.listen(port, ()=>{
    console.log('http:localhost:'+port)
})