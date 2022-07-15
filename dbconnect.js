const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const db_host = process.env.MONGODB_IP

const url = "mongodb://"+db_host+":27017/chat";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
