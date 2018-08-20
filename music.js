//environment
require('dotenv').config();

//logging
const fs = require('fs');
const moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a');

// Sporitfy API config
const keys = require('./keys');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

function GetTrack(userQuery) {
    spotify.search({type: 'track', query: userQuery, limit: 1}, function(err, data) {
        if (err) {
            fs.appendFile('error.log', now + ' Error occurred: ' + err, function(err) {});
            return console.log('An error occurred. Please try again');
        }
    
        fs.appendFile('server.log', '\n' + now + '\n' + JSON.stringify(data,null,2), function(err) {
            // console.log("Response written to file");
        });

        var trackName = data.tracks.items[0].name;
        var trackArtistName = data.tracks.items[0].artists[0].name;
        var trackAlbumName = data.tracks.items[0].album.name;
        var trackNumber = data.tracks.items[0].track_number;
        var previewURL = data.tracks.items[0].preview_url;

        // console.log(JSON.stringify(trackArtist,null,2));

        console.log('Song Name: ' + trackName);
        console.log('Artist Name: ' + trackArtistName);
        console.log('Album Name: ' + trackAlbumName);
        console.log('Track number: ' + trackNumber);
        console.log('Preview link: ' + previewURL);
      });
}

module.exports.GetTrack = GetTrack;
