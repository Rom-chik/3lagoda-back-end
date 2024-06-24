import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Add a new product to the database
router.post('/addProduct', async (req, res) => {
    const { category_number } = req.body;
    const { product_name } = req.body;
    const { characteristics } = req.body;
    try {
        await pool.query('INSERT INTO product ( "category_number", "product_name", "characteristics" ) VALUES ( $1, $2, $3 ) RETURNING *', [category_number, product_name, characteristics]);
        res.status(201).json({ message: 'Product added successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=create-product.js.map