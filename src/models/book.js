import mongoose from 'mongoose'
const Schema = mongoose.Schema
import bcrypt from 'bcrypt'

const BookSchema = new Schema ({
	name : String,
	price: String,
	img:{type: String}
})

const Book = mongoose.model('Book', BookSchema)
export { Book }
