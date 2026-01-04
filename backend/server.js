const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


app.get("/", async(req,res)=>{
    let response = await fetch('https://dummyjson.com/products')

    // parse the response body to json
    const products = await response.json()
    return res.status(200).json({products})
})

app.listen(8000, ()=>{
    console.log("server listening at 8000")
})



