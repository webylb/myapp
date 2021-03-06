let express = require('express');
let router = express.Router();
let MongoDB = require('../mongodb/index');

router.post('/', (req, res) => {

  let userName = req.body.user;
  let pwd = req.body.pwd;

  if(!userName){
    res.send({
      'message': 'err',
      'code': 11
    })
    return
  }

  if(!pwd){
    res.send({
      'message': 'err',
      'code': 12
    })
    return
  }

  MongoDB.MongoClient.connect(MongoDB.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("demo");
    dbo.collection("user").find({'name': userName}).toArray(function(err, result) { // 返回集合中所有数据
      if (err) throw err;
      if(result.pwd == pwd){
        res.send({
          'message': 'ok',
          'code': 1
        })
      }else{
        res.send({
          'message': '未注册',
          'code': 0
        })
      }
      db.close();
    });
  });
})

module.exports = router;
