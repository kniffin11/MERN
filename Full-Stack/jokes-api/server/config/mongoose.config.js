// This is for hte mongoose db connections

const mongoose = require('mongoose');

// LOCAL MONGODB CONNECTION -- this creates a db for you, named after name inputted below
/*
mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
*/


// CLOUD CONNECTION -- on mongodb cloud follow these instructions: 
// cloud - connect - connet to application - copy link and paste below - change password to root - add db name after .net/

mongoose.connect('mongodb+srv://root:root@cluster0.7rjdb.mongodb.net/jokes_api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


// To see the info within the db, type "mongo" into the terminal -  show dbs to see all dbs - "db.dbName.find()" returns all data within the given db. Or go to cloud site
