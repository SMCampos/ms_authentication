import { Pool } from "pg";

const connectionString = 'insira sua url do DB no Elephant';
const db = new Pool({ connectionString });

export default db;