import { database, password, user, host } from '../environment';
import { createConnection } from 'mysql2/promise';
import { Sequelize } from 'sequelize';

const dialect = 'mysql';

// Connect to server and create db if not exist
const connection = await createConnection({ host, user, password })
await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`)

// Connect to db with sequelize
const db = new Sequelize(database, user, password, { host, dialect })

export default db
