import express from 'express'
const bookRouter = express.Router()
import { Book } from '../models/book'
import multer from 'multer'
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' +file.originalname)
  }
})

const upload = multer({ storage: storage}).single("img")

bookRouter.get('/add_book', (req, res) => {
	res.render('addBook')
})

bookRouter.post('/add_book', upload, (req, res) => {
	const datas = req.body
	datas["img"]=req.file.filename
	const newBook = new Book(datas)
		newBook.save((err, book) => {
		if (err) res.send(err)
			res.redirect('/books')
	})
})

bookRouter.get('/', (req, res) => {
	Book.find({}, (err, books) => {
		if (err) res.send(err)
			res.render('book', {books})
	})
})

bookRouter.get('/:id', (req, res) => {
	let _id = req.params.id
	Book.findById({_id}, (err, book) => {
		if (err) res.send(err)
			res.render('oneBook', {book})
	})
})

export { bookRouter }