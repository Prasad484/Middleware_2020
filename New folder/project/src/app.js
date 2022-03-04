const express = require("express");
const path = require("path");
const app = express();

const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb://localhost/contactJiu');
// }
const port = 90;

// Define Mongoose Schema 
// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     designation: String
// });

// const Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files 
   app.use(express.urlencoded({ extended: false }))

// // PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('static', path.join(__dirname, 'static')) // Set the views directory
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");
// const ii = path.join(__dirname, "../public/index.html");

app.use(express.static(staticPath));
// ENDPOINTS
app.get('/a', (req, res) => {
    res.sendFile(path.join(__dirname, "../public"));
})

// app.get("/a", (req, res) => {
//     // res.sendFile(ii);
//     // res.sendFile(staticPath);
//      res.send(app.use(express.static(staticPath)));

// });

// app.get('/contact', (req, res) => {
//     res.status(200).render('contact.pug');
// })

// app.post('/contact', (req, res) => {
//     var myData = new Contact(req.body);
//     myData.save().then(() => {
//         res.send("This item has been saved to the database");
//     }).catch(() => {
//         res.status(400).send("Item was not saved to the database");
//     });
//     // res.status(200).render('contact.pug');
// })

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});