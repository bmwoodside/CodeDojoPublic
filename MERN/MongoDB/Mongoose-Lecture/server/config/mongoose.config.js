const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sundae_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to the mondoDB"))
    .catch(err => console.log("DB connection failed.", err));