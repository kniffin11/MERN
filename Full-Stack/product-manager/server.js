const express = require('express');
const cors = require('cors'); // cross origin resource sharing , share info from front end to back end
const app = express();
const port = 8000;
    
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); // enables cors so we anc share data from front to back end

require("./server/config/mongoose.config")

require("./server/routes/product.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
