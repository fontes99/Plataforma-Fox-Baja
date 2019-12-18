const express = require("express")
const routes = express.Router()
var cors = require('cors')
routes.use(cors())

const authController = require('./app/controllers/authController');
const jwtoken = require('./app/middlewares/jwtoken');

routes.post('/login', authController.login)
routes.post('/register', authController.register)
routes.post('/validateSecret', authController.validateSecret)
routes.get('/', jwtoken.checkToken, authController.index);

module.exports = routes;