import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.js';
import createCategoryRouter from './queries/category/create-category.js';
import deleteCategoryRouter from './queries/category/delete-category.js';
import updateCategoryRouter from './queries/category/update-category.js';
import findCategoriesRouter from './queries/category/find-categories.js';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server for Zlagoda");
});
// Use the category router
app.use('/category', createCategoryRouter);
app.use('/category', deleteCategoryRouter);
app.use('/category', updateCategoryRouter);
app.use('/category', findCategoriesRouter);
//2 get selling categories from database
app.get('/getSellingCategories', async (req, res) => {
    try {
        // Use the pool to execute a query
        const { rows } = await pool.query('SELECT c."category_number", c."category_name" FROM category c WHERE NOT EXISTS ( SELECT * FROM product p WHERE p."category_number" = c."category_number" AND NOT EXISTS ( SELECT * FROM "store_product" sp INNER JOIN "sale" s ON sp."UPC" = s."UPC" WHERE sp."id_product" = p."id_product" ) );');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//# sourceMappingURL=server.js.map