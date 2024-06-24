import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Delete a product from the database
router.delete('/deleteProduct', async (req, res) => {
    const { id_product } = req.body;
    try {
        await pool.query('DELETE FROM product WHERE "id_product" = $1', [id_product]);
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=delete-product.js.map