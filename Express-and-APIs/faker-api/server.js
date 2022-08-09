// importing express allows us to use express features
const express = require("express")
// an instance of an express application
const app = express();
// setting port 
const port = 8000;

// NEED THIS TO HANDLE POST REQUESTS, HAVE THESE TWO LINES BEFORE THE ROUTES
// this allows the app to convert forms into json
app.use(express.json());
// this 
app.use(express.urlencoded({extended:true}))

// route api endpoints, ex. http://localhost:800/api/hello

/*
@app.route("/api/hello")
def sayHello():
    return "Wazaaaa"

*/

// fake data here
let quotes = [
    {content: "msg", author: "1"},
    {content: "msg2", author: "2"},
    {content: "ms3", author: "3"},
    {content: "4sg", author: "4"},
    {content: "m5g", author: "5"},
]



// request and response
app.get("/api/hello", (req,res)=>{
    res.json({msg: "Wazaaa"});
})

// get all quotes endpoint
app.get('/api/quotes', (req,res)=>{
    // you cna directly send array back res.json(arr);
    res.json({count: quotes.length, results: quotes});
})

// get quote based on id number
app.get('/api/quotes/:idx', (req, res) => {
    // req.params.idx requests the value of idx
    res.json({results: quotes[req.params.idx]});
})

// to create a quote. Can use the same route as a get - it wont be confused
app.post('/api/quotes', (req, res) => {
    console.log("request.body info ->", req.body);
    // req.body is the object possed through on the body tag in postman -- this adds to quotes
    quotes.push(req.body);
    res.json({count: quotes.length, results: quotes});
})

// put request to update. use postman and type idx in manually
app.put('/api/quotes/:idx', (req, res)=>{
    // syntax for pulling url attirbutes = req.params.attributeName
    quotes[req.params.idx] = req.body 
    // putting req.body means whatever data is in the form, will update the current index
    res.json({count: quotes.length, results: quotes});
})

app.delete('api/quotes/:idx', (req,res)=>{
    const id = req.params.idx;

    // this deletes from that id, and the second parameter is how many objects you want to remove after the index
    quotes.splice(id, 1);
    res.json({count: quotes.length, results: quotes});
})

// this is required in all server.js's
// app listens for any requests, ie get, post, put, patch, delete on this port
app.listen(port, ()=>{console.log(`listening on port ${port}`)})
// be in app folder and do node server.js