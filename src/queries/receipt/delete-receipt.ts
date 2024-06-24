import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();

// Delete a receipt from the database
router.delete('/deleteReceipt', async (req: Request, res: Response) => {
    const { check_number } = req.body;

    try {
        await pool.query(
            'DELETE FROM receipt WHERE "check_number" = $1',
            [check_number]
        );

        res.status(200).json({ message: 'Receipt deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;