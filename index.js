import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import mongoose from "./Config/database.js"; 
import userRoutes from "./routes/UserRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import lotRoutes from "./routes/lotRoutes.js";
import buffaloRoutes from "./routes/buffaloRoutes.js";
import feedingRoutes from "./routes/feedingRoutes.js";
import reproductionRoutes from "./routes/reproductionRoutes.js";
import lactationRoutes from "./routes/lactationRoutes.js";
import productionRoutes from "./routes/productionRoutes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", propertyRoutes);
app.use("/api", lotRoutes);
app.use("/api", buffaloRoutes);
app.use("/api", feedingRoutes);
app.use("/api", reproductionRoutes);
app.use("/api", lactationRoutes);
app.use("/api", productionRoutes);

export default app;
