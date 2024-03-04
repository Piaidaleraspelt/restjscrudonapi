# restjscrudonapi

A simple RESTful API for performing CRUD operations on JSON files using the jscrudon module.

## Installation

You can install `restjscrudonapi` via npm:

```bash
npm install restjscrudonapi
```

## Usage

```javascript
const createJSONApi = require('restjscrudonapi');

const filePath = 'data.json';
const port = 3000;

createJSONApi(filePath, port);
```

This will start a server at http://localhost:3000 where you can access the RESTful API endpoints for JSON data.

## API

- **POST /api/data**: Create a new entry.
- **GET /api/data**: Read all entries.
- **GET /api/data/:id**: Read a specific entry.
- **PUT /api/data/:id**: Update a specific entry.
- **DELETE /api/data/:id**: Delete a specific entry.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
