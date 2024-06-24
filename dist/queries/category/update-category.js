import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Update a category in the database
router.put('/updateCategory', async (req, res) => {
    const { category_number } = req.body;
    const { category_name } = req.body;
    try {
        const result = await pool.query('UPDATE category SET "category_name" = $1 WHERE "category_number" = $2', [category_name, category_number]);
        res.status(200).json({ message: 'Category updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=update-category.js.map