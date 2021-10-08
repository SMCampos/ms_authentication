import { Pool } from "pg";

const connectionString = 'postgres://qpqojngw:8En06jJZrKxB1a4gcjfLWrqRbKClg_nC@kesavan.db.elephantsql.com/qpqojngw';
const db = new Pool({ connectionString });

export default db;