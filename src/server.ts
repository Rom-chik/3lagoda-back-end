import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.js';

// Import category routers
import createCategoryRouter from './queries/category/create-category.js';
import deleteCategoryRouter from './queries/category/delete-category.js';
import updateCategoryRouter from './queries/category/update-category.js';
import findCategoriesRouter from './queries/category/find-categories.js';
// Import product routers
import createProductRouter from './queries/product/create-product.js';
import deleteProductRouter from './queries/product/delete-product.js';
import updateProductRouter from './queries/product/update-product.js';
import findProductsRouter from './queries/product/find-products.js';
// Import store-product routers
import createStoreProductRouter from './queries/store-product/create-store-product.js';
import deleteStoreProductRouter from './queries/store-product/delete-store-product.js';
import updateStoreProductRouter from './queries/store-product/update-store-product.js';
import findStoreProductsRouter from './queries/store-product/find-store-products.js';
// Import employee routers
import createEmployeeRouter from './queries/employee/create-employee.js';
import deleteEmployeeRouter from './queries/employee/delete-employee.js';
import updateEmployeeRouter from './queries/employee/update-employee.js';
import findEmployeesRouter from './queries/employee/find-employees.js';
// Import customer-card routers
import createCustomerCardRouter from './queries/customer-card/create-customer-card.js';
import deleteCustomerCardRouter from './queries/customer-card/delete-customer-card.js';
import updateCustomerCardRouter from './queries/customer-card/update-customer-card.js';
import findCustomerCardsRouter from './queries/customer-card/find-customer-cards.js';
// Import receipt routers
import createReceiptRouter from './queries/receipt/create-receipt.js';
import deleteReceiptRouter from './queries/receipt/delete-receipt.js';
import findReceiptsRouter from './queries/receipt/find-receipts.js';
// Import sale routers
/*import createSaleRouter from './queries/sale/create-sale.js';
import deleteSaleRouter from './queries/sale/delete-sale.js';
import updateSaleRouter from './queries/sale/update-sale.js';
import findSalesRouter from './queries/sale/find-sales.js';*/
//Import custom routers
import customQuery1Router from './queries/custom/query-1.js';
import customQuery2Router from './queries/custom/query-2.js';


const app = express();

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server for Zlagoda");
});


// Use category routers
app.use('/category', createCategoryRouter);
app.use('/category', deleteCategoryRouter);
app.use('/category', updateCategoryRouter);
app.use('/category', findCategoriesRouter);
// Use product routers
app.use('/product', createProductRouter);
app.use('/product', deleteProductRouter);
app.use('/product', updateProductRouter);
app.use('/product', findProductsRouter);
// Use store-product routers
app.use('/store-product', createStoreProductRouter);
app.use('/store-product', deleteStoreProductRouter);
app.use('/store-product', updateStoreProductRouter);
app.use('/store-product', findStoreProductsRouter);
// Use employee routers
app.use('/employee', createEmployeeRouter);
app.use('/employee', deleteEmployeeRouter);
app.use('/employee', updateEmployeeRouter);
app.use('/employee', findEmployeesRouter);
// Use customer-card routers
app.use('/customer-card', createCustomerCardRouter);
app.use('/customer-card', deleteCustomerCardRouter);
app.use('/customer-card', updateCustomerCardRouter);
app.use('/customer-card', findCustomerCardsRouter);
// Use receipt routers
app.use('/receipt', createReceiptRouter);
app.use('/receipt', deleteReceiptRouter);
app.use('/receipt', findReceiptsRouter);
// Use sale routers
/*app.use('/sale', createSaleRouter);
app.use('/sale', deleteSaleRouter);
app.use('/sale', updateSaleRouter);
app.use('/sale', findSalesRouter);*/
// Use custom routers
app.use('/custom', customQuery1Router);
app.use('/custom', customQuery2Router);





