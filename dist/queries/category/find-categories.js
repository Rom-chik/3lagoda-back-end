import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Find all categories
router.get('/findCategories', async (req, res) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM category;');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=find-categories.js.map