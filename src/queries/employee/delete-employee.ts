import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();

// Delete employee from the database
router.delete('/deleteEmployee', async (req: Request, res: Response) => {
    const { id_employee } = req.body;

    try {
        await pool.query(
            'DELETE FROM employee WHERE "id_employee" = $1',
            [id_employee]
        );

        res.status(200).json({ message: 'Employee deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;