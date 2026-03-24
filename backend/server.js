const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/student-details", (req, res) => {
    res.json({
        name: "Sachin Giri",
        roll_number: "2023BCD0009"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});