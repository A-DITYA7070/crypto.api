import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({path:"./.env"});

app.use(express.json());
app.use(express.urlencoded({extended:true}));


import cryptoRoutes from "./routes/crypto.routes.js";

app.use("/api/v1",cryptoRoutes);


export default app;