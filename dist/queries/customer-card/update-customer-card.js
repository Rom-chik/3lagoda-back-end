import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Update customer_card in the database
router.put('/updateCustomerCard', async (req, res) => {
    const { card_number, cust_surname, cust_name, cust_patronymic, phone_number, city, street, zip_code, percent } = req.body;
    try {
        const result = await pool.query('UPDATE customer_card SET ( "cust_surname", "cust_name", "cust_patronymic", "phone_number", "city", "street", "zip_code", "percent" ) = ( $2, $3, $4, $5, $6, $7, $8, $9 ) WHERE "card_number" = $1 RETURNING *', [card_number, cust_surname, cust_name, cust_patronymic, phone_number, city, street, zip_code, percent]);
        res.status(200).json({ message: 'Customer_card updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=update-customer-card.js.map