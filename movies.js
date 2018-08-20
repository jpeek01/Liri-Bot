//environment
require('dotenv').config();

var request = require("request");
const keys = require('./keys');
const movieKey = keys.movies.apikey;

//logging
const fs = require('fs');
const moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a');

// var userQuery = 'The Matrix'

function GetFlick(userQuery) {

    // console.log(movieKey);

    // Creating an AJAX call for the specific movie button being clicked
    console.log('test 2');
    request('http://www.omdbapi.com/?t=' + userQuery + '&y=&plot=short&apikey=' + movieKey, function(error, response, body) {
        console.log('test 3');
        if (!error && response.statusCode === 200) {
            console.log('test 4');
            
            console.log('test 5');
            console.log('Title: ' + JSON.parse(body).Title);
            console.log('Year: ' + JSON.parse(body).Year);
            console.log('IMDB: ' + JSON.parse(body).imdbRating);
            console.log('Rotten Tomatoes: ' + JSON.parse(body).Ratings[1].Value);
            console.log('Languages: ' + JSON.parse(body).Language);
            console.log('Plot: ' + JSON.parse(body).Plot);
            console.log('Actors: ' + JSON.parse(body).Actors);

            fs.appendFile('server.log', '\n' + now + '\n' + JSON.parse(body), function(err) {
                // console.log("Response written to file");
                    console.log('test 6');
            });
        }
    });
}
console.log('test 7');
// GetFlick(userQuery);

module.exports.GetFlick = GetFlick;
console.log('test 8');
