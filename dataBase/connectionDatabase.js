import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  allowExitOnIdle: true,
  connectionString: process.env.DATABASE_URL,
});

try {
  await pool.query("SELECT NOW()");
  console.log("Base de datos conectada");
} catch (error) {
  console.log(error);
}