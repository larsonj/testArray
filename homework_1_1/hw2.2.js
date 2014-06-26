var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var query = {};
    var sort = {sort: [['State' , 1], ['Temperature', -1]]};
//    var operator = { '$inc' : { 'counter' : 1 } };
    var options = [];

    var myCollection = db.collection("data");

//    myCollection.find(query, function(err, cursor) {
    myCollection.find(query, sort).toArray(function(err, docs) {
        if (err) throw err;

        // var res = {}
        var state = "";
        var month_highs = [];
        for (i = 0; i < docs.length; i++) {
            var temperature = docs[i]['Temperature'];

            // we are transitioning to a new state
            if (state != docs[i]['State']) {
                month_highs.push(docs[i]);
                // console.log(docs[i]);
            }
            state = docs[i]['State'];
        }

        // number of responses we have recieved
        var numCallbacks = 0;
        for (i = 0; i < month_highs.length; i++) {
            db.collection('data').update(month_highs[i], { '$set' : {'month_high' : true} },
                function(err,updated) {
                    if (err) throw err;

                    console.log("Updated " + updated + " document month high");
                    if (++numCallbacks == month_highs.length) {
                        return db.close();
                    }
                });
        }
    });
});

