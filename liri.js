// get command line arguments, remove the path info, and format for APIs
var searchType = process.argv[2];
var argumentString = process.argv.slice(3).join('+');



// adding logging
const fs = require('fs');
const moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a');

//include the music.js to get Spotify data back
var music = require('./music');
var movies = require('./movies');

// var inquirer = require('inquirer'); // may use later for a CLI

fs.appendFile('server.log', '\n' + now + ' Search Type: ' + searchType + '; Search value: ' + argumentString, function (err) {
    
});

if (searchType === 'spotify-this-song') {
    console.log(music.GetTrack(argumentString));
} else if (searchType === 'concert-this') {
    console.log('not ready yet');
}  else if (searchType === 'movie-this') {
    console.log('test 1');
    console.log(movies.GetFlick(argumentString))
    console.log('test 9');
}


