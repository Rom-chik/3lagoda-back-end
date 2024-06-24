import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Update a product in the database
router.put('/updateProduct', async (req: Request, res: Response) => {
    const {id_product } = req.body;
    const {category_number } = req.body;
    const {product_name } = req.body;
    const {characteristics}  = req.body;

    try {
        const result = await pool.query(
            'UPDATE product SET ( "category_number", "product_name", "characteristics" ) = ( $2, $3, $4 ) WHERE "id_product" = $1 RETURNING *',
            [id_product, category_number, product_name, characteristics]
        );
        res.status(200).json({ message: 'Product updated successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;