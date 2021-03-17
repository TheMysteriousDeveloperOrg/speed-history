// import modules from external sources
import * as colors from 'colors';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

// Varibles for the API
const app = express();

// Cors Options

var corsOptions = {
    origin: "http://localhost:8081"
};

// Routes for the app

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Mongoose connection

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err: any) => {
    console.error("Connection error", err);
    process.exit();
  });

  function initial() {
    Role.estimatedDocumentCount((err: any, count: number) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save((err: any) => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save((err: any) => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save((err: any) => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

// Route paths for the API

const authRoutes: any = require('./routes/auth');

app.use("/authentication", authRoutes);

// Listen to the port given by the server or defined port!
var port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`[*] Listening on server: http://localhost:${port}`);
})