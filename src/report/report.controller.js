
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const reportService = require("./index.js");
const ReportController = {

    getAllData: catchAsync(async (req, res, next) => {

        const reports = await reportService.getAllData();
        if (!reports) {
            return next(new AppError("No Report found", 400));
        }
        res.status(200).json({
            success: true,
            results: reports.length,
            message: "Requested reports have been found !",
            reports
        })
    })
    ,
    getIndividualPetroleumSales: catchAsync(async (req, res, next) => {

        const reports = await reportService.getIndividualPetroleumSales();
        if (!reports) {
            return next(new AppError("No Report Found!", 404));
        }
        res.status(200).json({
            success: true,
            results: reports.length,
            message: 'List the total sale of each petroleum.!',
            reports

        })
    }),
    getTopHighestAndLowestCountrySales: catchAsync(async (req, res, next) => {


        const { highestSalesCountries, lowestSalesCountries } = reportService.getTopSalesCountries();

        if (!highestSalesCountries || !lowestSalesCountries) {
            return next(new AppError("No Report Found!", 404));
        };
        res.status(200).json({
            success: true,
            results: highestSalesCountries.length + lowestSalesCountries.length,
            message: 'List the top 3 countries with highest and lowest sales.!',
            data: {
                lowestSalesCountries, highestSalesCountries
            }
        });

    }
    )
    ,

    getAverageSaleByProduct: catchAsync(async (req, res, next) => {

        const averageSales = await reportService.getAverageSaleByProduct();
        if (!averageSales || averageSales.length === 0) {
            return next(new AppError("No Report Found!", 404));
        }
        res.status(200).json({
            success: true,
            results: averageSales.length,
            message: 'Average sale of each petroleum product for the specified 4-year interval',
            data: averageSales
        });

    })


}

module.exports = ReportController;
