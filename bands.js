var request = require("request");

var argOne = process.argv[2];


request("https://rest.bandsintown.com/artists/" + argOne + "?app_id=codingbootcamp", function(error, response, body) {

    console.log(JSON.stringify(body, null, '\t'));


    // request("https://rest.bandsintown.com/" + argOne + "events/" + argOne + "/events/?app_id=codingbootcamp", function(error, response, body) {

    //     console.log(JSON.stringify(body, null, 2));

    // });

});




