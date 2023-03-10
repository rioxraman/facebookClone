const express = require('express')
const app = express()
const cookieParser = require('cookie-parser') //1
const port = 3000
const expressLayouts = require('express-ejs-layouts');//1
const db = require('./config/mongoose')
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded()) // form submit 
app.use(cookieParser())
const router = require('./routes/')
app.use(expressLayouts)
app.use('/', router)
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.listen(port, () => {
  console.log(`Facebook app listening on port ${port}`)
})