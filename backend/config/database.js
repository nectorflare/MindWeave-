const { Sequelize } = require('sequelize');

const useMysql = Boolean(process.env.MYSQL_DATABASE);

const sequelize = useMysql
  ? new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER || 'root',
    process.env.MYSQL_PASSWORD || '',
    {
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT || 3306),
      dialect: 'mysql',
      logging: false
    }
  )
  : new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
  });

const authenticate = () => {
  return sequelize.authenticate();
};

module.exports = {
  sequelize,
  authenticate
};
