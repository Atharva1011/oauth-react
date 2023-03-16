import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
// import path from "path";
import authRoutes from "../routes/auth.js";

// CONFIGURATIONS
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ROUTES
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Listining to server on port ${PORT}`);
});
