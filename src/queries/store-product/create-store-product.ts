import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Add a new store_product to the database
router.post('/addStoreProduct', async (req: Request, res: Response) => {
    const {UPC } = req.body;
    const {UPC_prom } = req.body;
    const {id_product}  = req.body;
    const {selling_price } = req.body;
    const {products_number } = req.body;
    const {promotional_product }  = req.body;

    try {
        await pool.query(
            'INSERT INTO store_product ( "UPC", "UPC_prom", "id_product", "selling_price", "products_number", "promotional_product" ) VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *',
            [UPC, UPC_prom, id_product, selling_price, products_number, promotional_product]
        );
        res.status(201).json({ message: 'Store-product added successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;