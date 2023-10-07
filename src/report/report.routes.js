const express = require('express');
const router = express.Router();
const ReportController = require("./report.controller");


router.get('/', ReportController.getAllData);
router.route("/petroleum-sales").get(ReportController.getIndividualPetroleumSales);
router.route("/country-sales").get(ReportController.getTopHighestAndLowestCountrySales);
router.route("/average-sales").get(ReportController.getAverageSaleByProduct);

module.exports = router;