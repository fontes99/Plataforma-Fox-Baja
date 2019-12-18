const Express = require('express');
const cors = require('cors');
const Routes = require('./routes')
const mongoose = require('mongoose');
var bodyParser = require("body-parser")
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const uri = process.env.MONGO_URL;

class App {
  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
    this.database();
  }

  database() {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
      if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
      }
      console.log('Atlas connected')
    });
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(Express.json());
    this.server.use(bodyParser.json())
    this.server.use(bodyParser.urlencoded({extended: true}))
  }

  routes() {
    this.server.use('/', Routes);

    this.server.use((req, res) => {
      res.status(404).json({ error: 'pagina não encontrada' });
    });

    this.server.use((error, req, res, next) => {
      res.status(500).json({ error: 'erro interno' });
    });
  }
}

module.exports = new App().server;