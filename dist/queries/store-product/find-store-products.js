import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Find all store-products
router.get('/findStoreProducts', async (req, res) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM store_product;');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=find-store-products.js.map