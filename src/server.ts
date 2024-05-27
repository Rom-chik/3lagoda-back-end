import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();


const PORT = 3000;
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use(bodyParser.json());
app.use(cors());
