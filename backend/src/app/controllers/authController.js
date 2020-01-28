const path = require('path');
const jwt = require('jsonwebtoken');
const { validateRegister } = require('../models/userValidation')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const secretkey = process.env.SECRETKEY;
const registersecret = process.env.SECRETCODE;

class authController {

  async login(req, res) {

    try {

      let username = req.body.username;
      let password = req.body.password;

      if (!(username) && !(password)) return res.json({ success: false, message: 'Authentication failed! Please check the request' })

      var model = await userModel.find({ username: username }).exec();

      if (model.length === 0) return res.json({ success: false, message: 'Authentication failed! User not found' })

      const validPwd = await bcrypt.compare(password, model[0].password)
      if (!validPwd) return res.json({ success: false, message: 'Authentication failed! Incorrect password' })

      let token = jwt.sign({ _id: model[0]._id }, secretkey, { expiresIn: '2h' });
      return res.json({ success: true, message: 'Authentication successful!', token: token, id: model[0]._id })

    } catch (e) {
      console.error(e)
    }
  }

  async register(req, res) {

    const secret = req.body.secret;

    if (!(secret === registersecret)) return res.json({ success: false, message: "Wrong secret" })

    const data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }

    const { error } = validateRegister(data)

    if (!(error === undefined)) return res.status(400).json({ success: false, message: error.details[0].message })

    const emailExists = await userModel.findOne({ email: req.body.email })
    if (emailExists) return res.status(400).json({ success: false, message: 'Register failed! Email already exists' })

    const userExists = await userModel.findOne({ username: req.body.username })
    if (userExists) return res.status(400).json({ success: false, message: 'Register failed! Username already taken' })

    const salt = await bcrypt.genSalt(10);
    const hashPwd = await bcrypt.hash(req.body.password, salt);

    const user = new userModel({

      username: req.body.username,
      email: req.body.email,
      password: hashPwd

    });

    try {
      const savedUser = await user.save();
      return res.json({ success: true, message: 'Register successful!', id: savedUser._id })

    } catch (e) {
      res.status(400).send(e)
    }
  }

  validateSecret(req, res) {

    let secret = req.body.secret;
    if (secret === registersecret) return res.json({ success: true, message: 'Code is right!' })

    return res.json({ success: false, message: 'Code is wrong!' })
  }


  index(req, res) {
    return res.json({ success: true, message: req.decoded });
  }
}

module.exports = new authController();