const express = require("express")
const routes = express.Router()
var cors = require('cors')
routes.use(cors())

const ContentController = require('./app/controllers/ContentController');

routes.post('/startId', ContentController.startId)
routes.get('/getContents', ContentController.getContents);
routes.get('/getContentById/', ContentController.getContentById);

module.exports = routes;