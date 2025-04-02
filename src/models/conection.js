require(dotenv).config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

    const syncDatabase = async () => {
        try {
            await sequelize.sync({ force: false });
            console.log("Database synchronized successfully.");
        } catch (error) {
            console.error("Error synchronizing the database:", error);
        }
    }
    syncDatabase();
module.exports = sequelize;