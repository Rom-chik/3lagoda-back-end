import { Router, Request, Response } from "express";
import pool from '../../db.js';

const router = Router();
//1 Profit sum
router.get('/getProfitForEachCategory', async (req: Request, res: Response) => {
    try {
        // Find profit sum of each category.
        const { rows } = await pool.query('SELECT c."category_number", c."category_name" FROM category c WHERE NOT EXISTS ( SELECT * FROM product p WHERE p."category_number" = c."category_number" AND NOT EXISTS ( SELECT * FROM "store_product" sp INNER JOIN "sale" s ON sp."UPC" = s."UPC" WHERE sp."id_product" = p."id_product" ) );');
        console.log(rows);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;