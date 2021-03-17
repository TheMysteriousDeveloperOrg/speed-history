// Mongoose 

import * as mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const db: any = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');

db.ROLES = ["user", "admin"];

module.exports = db;