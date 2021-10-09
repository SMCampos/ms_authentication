import { Pool } from "pg";

const connectionString = 'insira a URL do seu BD no site Elephant';
const db = new Pool({ connectionString });

export default db;