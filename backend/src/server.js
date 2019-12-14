const Express = require('express');
const cors = require('cors');
const Routes = require('./routes')
var bodyParser = require("body-parser")

class App {
  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(Express.json());
    this.server.use(bodyParser.json())
    this.server.use(
      bodyParser.urlencoded({
        extended: true
      })
    )
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