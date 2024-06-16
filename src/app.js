import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

// Configuration
const app = express();
const corsOption = {
    credentials: true,
    origin: 'http://localhost:5173',
}
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Static file configuration
const staticPath = path.join(__dirname ,"../public");
app.use("/static", express.static(staticPath));

// Setting View Engine
const viewPath = path.join(__dirname ,"../views");
app.set("view engine", "ejs");
app.set("views", viewPath);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOption));

// Route Imports
import baseRoutes from "./routes/baseRoutes.js";
import user from "./routes/userRoutes.js";

// Middleware Imports
import errorMiddleware from "./middleware/error.js";
import { fileURLToPath } from "url";


// Mount Routes
app.use("/api/v1", user);
app.use("/", baseRoutes);


// Middleware for Errors
app.use(errorMiddleware);


export default app;
