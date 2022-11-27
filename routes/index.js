const routa = require('express').Router();

const notesRouter = require('./notes');
const htmlRouter = require('./html')


routa.use('/api', notesRouter);
routa.use('/', htmlRouter)

module.exports = routa;