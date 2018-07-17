import express from 'express'
const userRouter = express.Router()
import { User } from '../models/user'

userRouter.get('/register', (req, res) => {
	res.render('register')
})

userRouter.post('/register', (req, res, next) => {
	const newRegister = new User(req.body)
	newRegister.save((err, user) => {
		if(err) res.send(err)
			console.log(user)
	})
	res.location('/user/login')
	res.redirect('/user/login')
})

userRouter.get('/login', (req, res) => {
	res.render('login')
})

userRouter.post('/login', (req, res, next) => {
	if(req.body.email && req.body.password){
		User.authenticate(req.body.email, req.body.password, function(err, user){
			if (err || !user) {
				var err = new Error("Email ou mot de passe introuvable")
				err.status = 401
				return next(err)
			}else{
				return res.redirect('/')
			}
		})
	}
})


export { userRouter }