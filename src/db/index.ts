import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
});

export const dbConnection: Promise<mysql.PoolConnection> =
  dbPool.getConnection();
