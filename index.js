require('dotenv').config()
const express = require('express');
// another syntax used= import express from 'express';
const app = express()
const port = 4000

app.get('/', (req, res) => { // '/' is the root route o home route
  res.send('Hello World!')
})
// now we want that another route should also listens the request
app.get('/twitter', (req ,res)=>{
    res.send('Hello Twitter!')
} )
app.get('/login', (req,res)=>{
    res.send('<h1>login page</h1>')
})
// after chnaging in the codebase , we need to estat our server
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})