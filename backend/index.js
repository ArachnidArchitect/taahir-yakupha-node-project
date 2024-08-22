import express from 'express'
import cors from 'cors'
import productsRoute from './route/productsRoute.js'
import usersRoute from './route/usersRoute.js'

const app = express()


// middleware
app.use(express.json())
app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
}))
app.use(express.static('public'))
app.use('/products', productsRoute)
app.use('/users', usersRoute)

const port = 7000

app.listen(port, ()=>{
    console.log('http:localhost:'+port)
})