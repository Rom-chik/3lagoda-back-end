import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();

// Delete a product from the database
router.delete('/deleteProduct', async (req: Request, res: Response) => {
    const { id_product } = req.body;

    try {
        await pool.query(
            'DELETE FROM product WHERE "id_product" = $1',
            [id_product]
        );

        res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;