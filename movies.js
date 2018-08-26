//environment
require('dotenv').config();

const request = require("request");
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
    request('http://www.omdbapi.com/?t=' + userQuery + '&page=5&plot=short&apikey=' + movieKey, function(error, response, body) {

        var movieData = JSON.parse(body);

        if (!error && response.statusCode === 200) {
            console.log('Title: ' + movieData.Title);
            console.log('Year: ' + movieData.Year);
            console.log('IMDB: ' + movieData.imdbRating);
            console.log('Rotten Tomatoes: ' + movieData.Ratings[1].Value);
            console.log('Languages: ' + movieData.Language);
            console.log('Plot: ' + movieData.Plot);
            console.log('Actors: ' + movieData.Actors);

            fs.appendFile('server.log', '\n' + now + '\n' + body, function(err) {
                // console.log("Response written to file");
            });
        }
    });
}

// GetFlick(userQuery);

module.exports.GetFlick = GetFlick;

