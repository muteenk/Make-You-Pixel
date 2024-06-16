import dotenv from 'dotenv';
dotenv.config({ path: './config/config.env' });

// import connectDatabase from './config/database';
import app from './app.js';


// Handle Uncaught Exceptions
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
})


const port = process.env.PORT || 8000;


// Connect to database
// connectDatabase();


const server = app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})


// Unhandled Promise Rejection
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
})