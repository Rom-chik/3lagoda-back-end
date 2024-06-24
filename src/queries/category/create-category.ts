import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Add a new category to the database
router.post('/addCategory', async (req: Request, res: Response) => {
    const {category_name } = req.body;

    try {
        await pool.query(
            'INSERT INTO category ("category_name") VALUES ($1)',
            [category_name]
        );
        res.status(201).json({ message: 'Category added successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;