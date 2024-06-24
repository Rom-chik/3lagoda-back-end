import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Delete a store_product from the database
router.delete('/deleteStoreProduct', async (req, res) => {
    const { UPC } = req.body;
    try {
        await pool.query('DELETE FROM store_product WHERE "UPC" = $1 RETURNING *', [UPC]);
        res.status(200).json({ message: 'Store_product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=delete-store-product.js.map