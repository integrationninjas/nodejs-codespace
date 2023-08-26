const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connected to mongodb");
})
.catch((error) => {
    console.error("error connecting to mongodb: ", error);
})

app.listen(port, () => {
    console.log('server is running on port: '+ port)
})

app.get('/hello', (req, res) => {
    res.json({message: "Hello, Integration Ninjas!"})
});