
const fetchData = require("./src/utils/fetchData");
const sequelize = require("./src/config/database");


const app = require("./src/config/express");


const { PORT } = require("./src/config/vars");

(async () => {
    try {
        sequelize.sync({ force: true }).then(() => console.log('Database connected successfully. 😊😊'));
        await fetchData();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (err) {
        console.log(`Error Fetching data${err}`)
    }

})();
