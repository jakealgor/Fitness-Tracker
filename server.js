const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Jakealgor:<password>@cluster0.rjxfh.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    
    client.close();
});
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

(require("./routes/view.js"))(app);
(require("./routes/api.js"))(app);

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`)
});