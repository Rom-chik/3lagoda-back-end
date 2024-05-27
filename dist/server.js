import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.js';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server for Zlagoda");
});
//get data from database
app.get('/getUsers', async (req, res) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM users');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//# sourceMappingURL=server.js.map