let express = require('express');
let router = express.Router();
let MongoDB = require('../mongodb/index');

router.post('/', (req, res) => {

  let userName = req.body.name;
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
    dbo.collection("user").insert({'name': userName,'pwd': pwd},(err, result) => {
      if(result.result.ok === 1){
        res.send({
          'message': '注册成功',
          'code': 1
        })
      }else{
        res.send({
          'message': '注册失败',
          'code': 0
        })
      }
    })
  })
})

module.exports = router;
