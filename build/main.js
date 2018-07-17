require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_about__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_user__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_books__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mongoose__);
console.log('coucou');


const { PORT, db_url } = process.env;










__WEBPACK_IMPORTED_MODULE_9_mongoose___default.a.connect(db_url);
var db = __WEBPACK_IMPORTED_MODULE_9_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('ça marche avec mongo');
});

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// view engine setup
app.set("views", __WEBPACK_IMPORTED_MODULE_4_path___default.a.join(__dirname, 'views'));
app.set("view engine", "pug");
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_4_path___default.a.join(__dirname, "../public")));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_2_volleyball___default.a);

app.get('/', (req, res) => {
	res.render('home');
});
app.use('/about', __WEBPACK_IMPORTED_MODULE_6__routes_about__["a" /* AboutRouter */]);
app.use('/user', __WEBPACK_IMPORTED_MODULE_7__routes_user__["a" /* userRouter */]);
app.use('/books', __WEBPACK_IMPORTED_MODULE_8__routes_books__["a" /* bookRouter */]);

app.listen(PORT, () => {
	console.log(`ca marche sur le port ${PORT}`);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const AboutRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

AboutRouter.get('/', (req, res) => {
	res.render('about');
});



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(12);

const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


userRouter.get('/register', (req, res) => {
	res.render('register');
});

userRouter.post('/register', (req, res, next) => {
	const newRegister = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](req.body);
	newRegister.save((err, user) => {
		if (err) res.send(err);
		console.log(user);
	});
	res.location('/user/login');
	res.redirect('/user/login');
});

userRouter.get('/login', (req, res) => {
	res.render('login');
});

userRouter.post('/login', (req, res, next) => {
	if (req.body.email && req.body.password) {
		__WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */].authenticate(req.body.email, req.body.password, function (err, user) {
			if (err || !user) {
				var err = new Error("Email ou mot de passe introuvable");
				err.status = 401;
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;


const UserSchema = new Schema({
	username: { type: String, index: true },
	name: { type: String, index: true },
	email: { type: String, index: true },
	password: { type: String }
});

UserSchema.statics.authenticate = function (email, password, cb) {
	User.findOne({ email: email }).exec(function (err, user) {
		if (err) {
			return cd(err);
		} else if (!user) {
			var error = new Error('Utilisateur introuvable');
			error.status = 401;
			return cd(error);
		}
		__WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compare(password, user.password, function (error, result) {
			if (result === true) {
				return cb(null, user);
			} else {
				return cb();
			}
		});
	});
};
UserSchema.pre('save', function (next) {
	const user = this;
	__WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hash(user.password, 10, function (err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);

const bookRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


var storage = __WEBPACK_IMPORTED_MODULE_2_multer___default.a.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

const upload = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ storage: storage }).single("img");

bookRouter.get('/add_book', (req, res) => {
	res.render('addBook');
});

bookRouter.post('/add_book', upload, (req, res) => {
	const datas = req.body;
	datas["img"] = req.file.filename;
	const newBook = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */](datas);
	newBook.save((err, book) => {
		if (err) res.send(err);
		res.redirect('/books');
	});
});

bookRouter.get('/', (req, res) => {
	__WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].find({}, (err, books) => {
		if (err) res.send(err);
		res.render('book', { books });
	});
});

bookRouter.get('/:id', (req, res) => {
	let _id = req.params.id;
	__WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].findById({ _id }, (err, book) => {
		if (err) res.send(err);
		res.render('oneBook', { book });
	});
});



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;


const BookSchema = new Schema({
	name: String,
	price: String,
	img: { type: String }
});

const Book = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Book', BookSchema);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map