import { Pool } from "pg";

const connectionString = 'insira a url do DB no site Elephant';
const db = new Pool({ connectionString });

export default db;