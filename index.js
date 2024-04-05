const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/", (req,res) => {
    res.json({message: "I am working fine"})
})

app.listen("3000", () => {
    console.log("the app is up and running on port 3000")
})