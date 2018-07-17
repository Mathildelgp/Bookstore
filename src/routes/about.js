import express from 'express'
const AboutRouter = express.Router()

AboutRouter.get('/', (req, res) => {
	res.render('about')
})

export { AboutRouter }