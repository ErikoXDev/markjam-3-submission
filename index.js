const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.static(path.join(__dirname, "./public")))

app.listen(8000, () => {
    console.log("Started server! http://localhost:8000");
});