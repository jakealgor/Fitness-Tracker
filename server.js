const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGNODB_URI || 'mongodb://localhost/fitness', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`)
});

