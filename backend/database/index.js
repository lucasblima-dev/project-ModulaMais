import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_DOCKER_PORT,
    logging: process.env.APP_DEBUG ? console.log : false,
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

const database = async function connect() {
  try {
    await sequelize.authenticate();

    if (process.env.APP_DEBUG) {
      console.log(
        `--> Conexão com '${process.env.MYSQL_HOST}:${process.env.MYSQL_LOCAL_PORT}/${process.env.MYSQL_DATABASE}' realizada com sucesso`
      );
    }
  } catch (err) {
    if (process.env.APP_DEBUG) {
      console.log(
        `--> Erro ao conectar com '${process.env.MYSQL_HOST}:${process.env.MYSQL_LOCAL_PORT}/${process.env.MYSQL_DATABASE}' com o usuário: '${process.env.MYSQL_USERNAME}'`
      );
      console.log(err);
    }
  }
}

export default database;