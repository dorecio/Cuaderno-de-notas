const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (archivo, noteData) =>
    fs.writeFile(archivo, JSON.stringify(noteData), (err) =>
        err ? console.error(err) : console.info(`\nLa nota se ha agregado a ${archivo}`)
    );
   
const agregarNote = (note, archivo) => {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(note);
            writeToFile(archivo, parsedData);
        }
    });
};

module.exports = {
    readFromFile,
    writeToFile,
    agregarNote
};