// 接入mongodb
var MongoClient = require('mongodb').MongoClient;
var dbURL = "mongodb://localhost:27017";

exports.MongoClient = MongoClient;
exports.dbURL = dbURL
