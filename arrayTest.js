var myObjArray = 	{
	"_id" : 100,
	"scores" : [
		{
			"type" : "exam",
			"score" : 47.42608580155614
		},
		{
			"type" : "quiz",
			"score" : 44.83416623719906
		},
		{
			"type" : "homework",
			"score" : 19.85604968544429
		},
		{
			"type" : "homework",
			"score" : 39.01726616178844
		}
	]
}


var DEBUG = true;

if (DEBUG) {
	debugger;
};

var lowestScoreIndex = 0; // set to myObjArray.scores[0].score - first object in the array
var lowestScoreObject = myObjArray.scores[lowestScoreIndex];
console.log(lowestScoreObject);

for (var i = 1; i < myObjArray.scores.length; i++) {

	if (myObjArray.scores[i].score < lowestScoreObject.score) {
		lowestScoreIndex = i; // set to position of myObjArray.scores[i].score;
		lowestScoreObject = myObjArray.scores[i];
		console.log("new lowestScoreIndex found ");
		console.log(lowestScoreObject);

		console.log("lowestScoreIndex: [" + lowestScoreIndex + "]");

		if (DEBUG) { // if(myObjArray.scores)
			debugger;
		};

	} 

};

if (DEBUG) {  // 
	debugger;
}

// what we ended up with
console.dir("lowest score found: " + lowestScoreObject.score + " [" + lowestScoreObject.type + "]");
