let express = require('express');
let router = express.Router();
let MongoDB = require('../mongodb/index');

router.get('/', (req, res) => {
  MongoDB.MongoClient.connect(MongoDB.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("demo");
    dbo.collection("user").find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        res.send(result)
        db.close();
    });
  });
})

module.exports = router;
