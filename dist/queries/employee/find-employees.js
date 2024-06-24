import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Find all employees
router.get('/findEmployees', async (req, res) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT * FROM employee;');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=find-employees.js.map