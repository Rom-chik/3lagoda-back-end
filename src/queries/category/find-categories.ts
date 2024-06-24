import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Find all categories
router.get('/findCategories', async (req: Request, res: Response) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM category;');
        console.log(rows);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;