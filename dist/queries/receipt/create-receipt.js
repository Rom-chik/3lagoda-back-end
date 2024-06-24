import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Add a new receipt to the database
router.post('/addReceipt', async (req, res) => {
    const { check_number, id_employee, card_number, print_date, sum_total, vat } = req.body;
    try {
        await pool.query('INSERT INTO receipt ( "check_number", "id_employee", "card_number", "print_date", "sum_total", "vat" ) VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *', [check_number, id_employee, card_number, print_date, sum_total, vat]);
        res.status(201).json({ message: 'Receipt added successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=create-receipt.js.map