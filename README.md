# JabDB

JabDB is a JavaScript npm package for interacting with a database using a JavaScript client.

## Installation

You can install JabDB using npm:

```bash
npm i jabulane-db

```

Usage

To use JabDB, you need to create an instance of the JabDB class with the appropriate API base URL and API key. Here's an example:

javascript


```bash
const JabDB = require('jabdb');

// Create an instance of JabDB
const jabdb = new JabDB('https://your-api-endpoint.com', 'your-api-key');

// Example: Get all collection names
jabdb.getAllCollections()
  .then(collections => {
    console.log('All Collections:', collections);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Example: Fetch data from a collection
jabdb.getCollectionData('users', { filters: { age: { $gte: 18 } }, sortField: 'name', sortOrder: 'asc', page: 1, pageSize: 10 })
  .then(data => {
    console.log('Data from Users Collection:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Other methods: getEntryById(), searchEntityByField(), addDataToCollection(), deleteDataFromCollection(), updateDataInCollection(), etc.

API Reference
getAllCollections()

```

Fetch all collection names from the database.

javascript


```bash

jabdb.getAllCollections();

getCollectionData(collectionName, options?)

```

Fetch data from a specific collection with filtering, sorting, and pagination options.

javascript

```bash

jabdb.getCollectionData('users', { filters: { age: { $gte: 18 } }, sortField: 'name', sortOrder: 'asc', page: 1, pageSize: 10 });

getEntryById(collectionName, id)


```

Get a specific entry from a collection by ID.

javascript


```bash

jabdb.getEntryById('users', '123');

searchEntityByField(collectionName, fieldName, searchValue)

```

Search for entities in a collection by a specific field.

javascript

```bash

jabdb.searchEntityByField('users', 'name', 'John Doe');

addDataToCollection(collectionName, newData)

```


Add new data to a collection.

javascript


```bash

const newData = { name: 'John Doe', age: 25 };
jabdb.addDataToCollection('users', newData);

deleteDataFromCollection(collectionName, id)

```

Delete data from a collection by ID.

javascript

```bash

jabdb.deleteDataFromCollection('users', '123');

updateDataInCollection(collectionName, id, updatedData)

```

Update data in a collection by ID.

javascript

```bash

const updatedData = { name: 'Updated Name', age: 30 };
jabdb.updateDataInCollection('users', '123', updatedData);

```
License

This project is licensed under the MIT License - see the LICENSE file for details.