// import { Sequelize } from 'sequelize';

// const useMysql = Boolean(process.env.MYSQL_DATABASE);

// export const sequelize = useMysql
//   ? new Sequelize(
//     process.env.MYSQL_DATABASE || 'edtech_platform',
//     process.env.MYSQL_USER || 'root',
//     process.env.MYSQL_PASSWORD,
//     {
//       host: process.env.MYSQL_HOST || 'localhost',
//       port: Number(process.env.MYSQL_PORT || 3306),
//       dialect: 'mysql',
//       logging: true
//     }
//   )
//   : new Sequelize({
//     dialect: 'sqlite',
//     storage: './iam.sqlite',
//     logging: false
//   });

// export const authenticate = () => sequelize.authenticate();

// import { Sequelize } from 'sequelize';

// const useMysql = Boolean(process.env.MYSQL_DATABASE);

// export const sequelize = 
// useMysql
//   // ? 
//   new Sequelize(
//     process.env.MYSQL_DATABASE || 'edtech_platform',
//     process.env.MYSQL_USER || 'root',
//     process.env.MYSQL_PASSWORD,
//     {
//       host: process.env.MYSQL_HOST || 'localhost',
//       port: Number(process.env.MYSQL_PORT || 3306),
//       dialect: 'mysql',
//       logging: true
//     }
//   )
//   // : new Sequelize({
//   //   dialect: 'sqlite',
//   //   storage: './iam.sqlite',
//   //   logging: false
//   // });

// export const authenticate = () => sequelize.authenticate();


import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || 'edtech_platform',
  process.env.MYSQL_USER || 'root',
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT || 3306),
    dialect: 'mysql',
    logging: true,
  }
);

export const authenticate = () => sequelize.authenticate();