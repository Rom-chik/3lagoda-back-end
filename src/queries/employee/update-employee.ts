import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Update employee in the database
router.put('/updateEmployee', async (req: Request, res: Response) => {
    const {
        id_employee,
        empl_surname,
        empl_name,
        empl_patronymic,
        empl_role,
        salary,
        date_of_birth,
        date_of_start,
        phone_number,
        city,
        street,
        zip_code
    } = req.body;

    try {
        const result = await pool.query(
            'UPDATE employee SET ( "empl_surname", "empl_name", "empl_patronymic", "empl_role", "salary", "date_of_birth", "date_of_start", "phone_number", "city", "street", "zip_code" ) = ( $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) WHERE id_employee = $1 RETURNING *',
            [id_employee, empl_surname, empl_name, empl_patronymic, empl_role, salary, date_of_birth, date_of_start, phone_number, city, street, zip_code]
        );
        res.status(200).json({ message: 'Employee updated successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;