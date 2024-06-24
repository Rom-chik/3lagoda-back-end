import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Update a store_product in the database
router.put('/updateStoreProduct', async (req, res) => {
    const { UPC } = req.body;
    const { UPC_prom } = req.body;
    const { id_product } = req.body;
    const { selling_price } = req.body;
    const { products_number } = req.body;
    const { promotional_product } = req.body;
    try {
        const result = await pool.query('UPDATE store_product SET ( "UPC_prom", "id_product", "selling_price", "products_number", "promotional_product" ) = ( $2, $3, $4, $5, $6 ) WHERE "UPC" = $1 RETURNING *', [UPC, UPC_prom, id_product, selling_price, products_number, promotional_product]);
        res.status(200).json({ message: 'Store_product updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=update-store-product.js.map