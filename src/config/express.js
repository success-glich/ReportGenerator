const express = require("express");
const routes = require("../router");
const cors = require("cors");
const AppError = require("../utils/appError");



const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//! Api 
app.use("/api/v1", routes);


//! ERROR HANDLING
app.use("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

module.exports = app;