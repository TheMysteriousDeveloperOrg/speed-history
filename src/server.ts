// import modules from external sources
import * as colors from 'colors';
import express from 'express';
import morgan from 'morgan';

// Varibles for the API
const app = express();

// Routes for the app

app.use(morgan('combined'));

// Route paths for the API

const authRoutes: any = require('./routes/auth');

app.use("/authentication", authRoutes);

// Listen to the port given by the server or defined port!
var port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`[*] Listening on server: http://localhost:${port}`);
})