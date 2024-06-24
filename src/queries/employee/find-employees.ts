import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Find all employees
router.get('/findEmployees', async (req: Request, res: Response) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM employee;');
        console.log(rows);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;