const express = require('express');
const bodyParser = require('body-parser');
const jsonCRUD = require('./jscrudon');

const createJSONApi = (filePath, port) => {
    const app = express();
    app.use(bodyParser.json());

    // Create a new entry
    app.post('/api/data', (req, res) => {
        const newData = req.body;
        jsonCRUD.createEntry(filePath, newData);
        res.send('New entry added successfully');
    });

    // Read all entries
    app.get('/api/data', (req, res) => {
        const allEntries = jsonCRUD.readAllEntries(filePath);
        res.json(allEntries);
    });

    // Read a specific entry
    app.get('/api/data/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const entry = jsonCRUD.readEntry(filePath, id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(404).send('Entry not found');
        }
    });

    // Update an entry
    app.put('/api/data/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const updatedData = req.body;
        jsonCRUD.updateEntry(filePath, id, updatedData);
        res.send('Entry updated successfully');
    });

    // Delete an entry
    app.delete('/api/data/:id', (req, res) => {
        const id = parseInt(req.params.id);
        jsonCRUD.deleteEntry(filePath, id);
        res.send('Entry deleted successfully');
    });

    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    });
};

module.exports = createJSONApi;
