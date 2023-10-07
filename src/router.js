const routes = require('express').Router();
const reportRouter = require('./report/report.routes');

routes.use("/reports", reportRouter);


module.exports = routes;