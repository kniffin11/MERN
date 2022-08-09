const mongoose = require('mongoose');
const db_name = "product_manager_db"

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

mongoose.connect(`mongodb+srv://DBUsername:DBPassword@cluster0.7rjdb.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
