/**
 * Created by jcl on 6/25/14.
 */
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var myDB = "mongodb://127.0.0.1:27017/students"
var myCollection = "data"

MongoClient.connect(myDB, function(err, db) {
    if(err) throw err;
    db.collectionNames(function(err, collections){
        console.log(collections);
    });
});
