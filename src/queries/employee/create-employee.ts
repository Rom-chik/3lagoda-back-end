import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
// Add a new employee to the database
router.post('/addEmployee', async (req: Request, res: Response) => {
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
        await pool.query(
            'INSERT INTO employee ( "id_employee", "empl_surname", "empl_name", "empl_patronymic", "empl_role", "salary", "date_of_birth", "date_of_start", "phone_number", "city", "street", "zip_code" ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) RETURNING *',
            [id_employee, empl_surname, empl_name, empl_patronymic, empl_role, salary, date_of_birth, date_of_start, phone_number, city, street, zip_code]
        );
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;