console.log('coucou')
import express from 'express'
import 'dotenv/config'
const { PORT, db_url } = process.env

import volleyball from 'volleyball'
import session from 'express-session'
import path from 'path'
import flash from 'connect-flash'
import { AboutRouter } from './routes/about'
import { userRouter } from './routes/user'
import { bookRouter } from './routes/books'
import mongoose from 'mongoose'

mongoose.connect(db_url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('ça marche avec mongo')
});

const app = express()

// view engine setup
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "pug") 
app.use(express.static( path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(volleyball)

app.get('/', (req, res) =>{
	res.render('home')
})
app.use('/about', AboutRouter)
app.use('/user', userRouter)
app.use('/books', bookRouter)

app.listen(PORT, () => {
	console.log(`ca marche sur le port ${PORT}`)
})