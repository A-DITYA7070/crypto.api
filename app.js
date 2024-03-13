import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


import cryptoRoutes from "./routes/crypto.routes.js";

app.use("/api/v1",cryptoRoutes);


export default app;