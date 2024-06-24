import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();

// Delete customer_card from the database
router.delete('/deleteCustomerCard', async (req: Request, res: Response) => {
    const { card_number } = req.body;

    try {
        await pool.query(
            'DELETE FROM customer_card WHERE "card_number" = $1',
            [card_number]
        );

        res.status(200).json({ message: 'Customer_card deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;