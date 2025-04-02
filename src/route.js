const express = require('express');
const UserController = require('./controllers/user.router');
const router = express.Router();

const userContrroler = new UserController();
router.post('/user', (req, res) => userContrroler.createUser(req, res));
router.get('/user/:id', (req, res) => userContrroler.getUser(req, res));
router.put('/user/:id', (req, res) => userContrroler.updateUser(req, res));
router.delete('/user/:id', (req, res) => userContrroler.deleteUser(req, res));
router.get('/users', (req, res) => userContrroler.getAllUsers(req, res));