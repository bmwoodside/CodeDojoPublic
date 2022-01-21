const express = require('express');
const app = express();
const port = 8000;

// gotta have this before using "POST"
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/api", (req, res) => {
    res.json({message: "hey it's me!", somestuff: [1, 2, 3]});
})

app.get("/api/repeat/:word", (req, res) => {
    console.log(req.params.word);
    res.json({repeat: req.params.word});
})

app.post("/api/repeat", (req, res) => {
    console.log(req.body);
    res.json({message: "received"});
})







app.listen(port, () => console.log(`running on port ${port} is a new way i like to be!!!`));