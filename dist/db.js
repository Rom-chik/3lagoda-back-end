import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'login',
    password: 'admin',
    port: 5432,
});
pool.on('connect', () => {
    console.log('Database connected successfully.');
});
pool.on('error', (err) => {
    console.error('Database connection failed.', err);
    process.exit(-1);
});
export default pool;
//# sourceMappingURL=db.js.map