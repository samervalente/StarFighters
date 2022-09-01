import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
const connection = new Pool({
  connectionString: 'postgres://postgres:872463sv@localhost:5432/valex'
});

export default connection