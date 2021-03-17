// import modules from external sources
import * as colors from 'colors';
import * as express from 'express';
import * as morgan from 'morgan';

// Varibles for the API
const app: any = express();

// Routes for the app

app.use(morgan('combined'));

// Route paths for the API

const authRoutes: any = require('./routes/auth');

app.use("/authentication", authRoutes);