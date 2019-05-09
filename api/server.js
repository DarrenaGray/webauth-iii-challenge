const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('Connected!');
});

module.exports = server;