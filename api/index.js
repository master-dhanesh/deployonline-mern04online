const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));

app.get("/api", function (req, res, next) {
    res.status(200).json({ messgae: "Welcome to LIVETIME app" });
});

app.get("/api/clock", function (req, res, next) {
    d = new Date();
    res.status(200).json({
        time: d.toLocaleTimeString(),
        date: d.toLocaleDateString(),
    });
});

app.listen(
    process.env.PORT,
    console.log(`Server running on PORT ${process.env.PORT}`)
);
