const sequelize = require("../config/database");
const { Op } = require('sequelize');
class ReportService {
    Reports;
    constructor(Reports) {
        this.Reports = Reports;
    }
    async getAllData() {
        try {

            const reports = await this.Reports.findAll();
            return reports;
        } catch (err) {
            return err
        }


    }
    async getIndividualPetroleumSales() {

        try {
            const reports = await this.Reports.findAll({
                attributes: [
                    ['petroleum_product', 'Product'],
                    [sequelize.fn("SUM", sequelize.col('sale')), 'Total Sales']
                ],
                group: ['Product']
            });
            return reports;
        } catch (err) {
            return err
        }
    }
    async getTopSalesCountries(limit = 3) {
        try {

            const lowestSalesCountries = await Report.findAll({
                limit: limit,
                attributes: [
                    'country', [sequelize.fn('SUM', sequelize.col('sale')), 'sales']
                ],
                group: ['country'],
                order: sequelize.col('sales')
            });
            const highestSalesCountries = await Report.findAll({
                limit: limit,
                attributes: [
                    'country',
                    [sequelize.fn('SUM', sequelize.col('sale')), 'sales']
                ],
                group: ['country'],
                order: sequelize.literal('sales DESC')

            });

            return { lowestSalesCountries, highestSalesCountries };

        } catch (err) {
            return err;
        }
    }
    async getAverageSaleByProduct(startYear = 2007, endYear = 2010) {
        try {

            const averageSales = await this.Reports.findAll({
                attributes: [
                    ['petroleum_product', 'Product'],
                    [sequelize.fn('AVG', sequelize.col('sale')), 'average_sale']
                ],
                where: {
                    year: {
                        [Op.between]: [startYear, endYear]
                    },
                    sale: {
                        [Op.not]: 0
                    }
                },
                group: ['petroleum_product']
            });

            if (!averageSales || averageSales.length === 0) {
                return next(new AppError("No Report Found!", 404));
            }

            return averageSales;

        } catch (err) {

            return err
        }
    }

}
module.exports = ReportService;