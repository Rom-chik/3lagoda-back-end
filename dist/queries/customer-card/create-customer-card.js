import { Router } from "express";
import pool from '../../db.js';
const router = Router();
// Add a new customer_card to the database
router.post('/addCustomerCard', async (req, res) => {
    const { card_number, cust_surname, cust_name, cust_patronymic, phone_number, city, street, zip_code, percent } = req.body;
    try {
        await pool.query('INSERT INTO customer_card ( "card_number", "cust_surname", "cust_name", "cust_patronymic", "phone_number", "city", "street", "zip_code", "percent" ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING *', [card_number, cust_surname, cust_name, cust_patronymic, phone_number, city, street, zip_code, percent]);
        res.status(201).json({ message: 'Customer_card added successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=create-customer-card.js.map