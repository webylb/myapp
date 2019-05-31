/* 接入mongodb*/
let MongoClient = require('mongodb').MongoClient;
let dbURL = "mongodb://localhost:27017";

exports.MongoClient = MongoClient;
exports.dbURL = dbURL
