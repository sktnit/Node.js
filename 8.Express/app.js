const express = require("express");
const path = require("path")
const fs = require("fs")
const app = express();

const port = 80;

// serving static file using url and folder
app.use('/public', express.static('public'))

// middleware used to get the encoded form data and provide to express 
app.use(express.urlencoded({ extended: true }))

// set the template engine for pug
app.set('view engine', 'pug')

// set the view directory
app.set("views",path.join(__dirname,"views"))

// ENDPOINTS WITH GET REQUEST
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

// ENDPOINT WITH POST REQUEST
app.post('/', (req, res)=>{
    // console.log(req.body)
    const form= req.body;
    name =  form.name
    age = form.age
    gender = form.gender
    address = form.address
    more = form.more
    let outputToWrite = `The name of the person is ${name}, ${age} years old, ${gender}. residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your message has been submitted successfully!'}
    res.status(200).render('index.pug', params);
})

// // pug template engine demo endpoints 
// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
// });
 
// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app.");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app.");
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app.");
// });
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website.");
// });

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
