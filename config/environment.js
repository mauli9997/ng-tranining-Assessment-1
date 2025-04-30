
const dotenv = require("dotenv").config();
const development = {
	name: process.env.ENVIRONMENT,
	db: process.env.DB_DEVELOPMENT,
	db_name: process.env.DB_NAME_DEVELOPMENT,
	deployment: process.env.DEPLOYMENT,
};
const production = {
	name: process.env.ENVIRONMENT,
	db: process.env.DB,
	db_name: process.env.DB_NAME,
	deployment: process.env.DEPLOYMENT,
};

module.exports = production;
