const axios = require('axios');
const Report = require("../report/report");

let url = 'https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json';

const fetchData = async () => {

    try {

        const { data } = await axios.get(url);
        data.forEach(({ year, petroleum_product, sale, country }) => {

            Report.create({
                year, petroleum_product, sale, country
            })
        });
    } catch (err) {
        return err
    }

};
module.exports = fetchData;