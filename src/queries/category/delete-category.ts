import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();

// Delete a category from the database
router.delete('/deleteCategory', async (req: Request, res: Response) => {
    const { category_number } = req.body;

    try {
        await pool.query(
            'DELETE FROM category WHERE "category_number" = $1',
            [category_number]
        );

        res.status(200).json({ message: 'Category deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;