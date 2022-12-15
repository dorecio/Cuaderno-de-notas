const notas = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, agregarNote, borrarNote } = require('../helpers/fsUtils');

notas.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notas.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        agregarNote(newNote, './db/db.json');
        res.json(`Nota agregada exitosamente`);
    } else {
        res.json(`Error en agregar nota`);
    }
});


/* notas.delete('/notes/:id', (req, res) => {
    if (id) {
        borrarNote(id, './db/db.json');
        res.json(`Nota eliminada exitosamente`);
    } else {
        res.json(`Error en agregar nota`);
    }
}); */

module.exports = notas;