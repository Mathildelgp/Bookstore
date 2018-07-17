import mongoose from 'mongoose'
const Schema = mongoose.Schema
import bcrypt from 'bcrypt'

const UserSchema = new Schema ({
	username : {type:String, index:true},
	name : {type:String, index:true},
	email : {type:String, index:true},
	password : {type:String}
})

UserSchema.statics.authenticate = function(email, password, cb){
	User.findOne({email:email})
		.exec(function(err, user){
			if (err) {
				return cd(err)
			}else if (!user){
				var error = new Error('Utilisateur introuvable')
				error.status = 401
				return cd(error)
			}
			bcrypt.compare(password, user.password, function(error, result){
				if(result === true){
					return cb(null, user)
				}else{
					return cb()
			}
		})
	})
}
UserSchema.pre('save', function(next){
	const user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if(err) return next(err)
		user.password = hash;
		next()
	})
})

const User = mongoose.model('User', UserSchema)
export { User }
