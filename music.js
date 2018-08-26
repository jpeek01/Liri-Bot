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
    spotify.search({type: 'track', query: userQuery, limit: 5}, function(err, data) {
        if (err) {
            fs.appendFile('error.log', now + ' Error occurred: ' + err, function(err) {});
            return console.log('An error occurred. Please try again');
        }
    
        fs.appendFile('server.log', '\n' + now + '\n' + JSON.stringify(data,null,2), function(err) {
            // console.log("Response written to file");
        });

        var i = 1;

        for (key in data.tracks.items) {
            var trackName = data.tracks.items[key].name;
            var trackArtistName = data.tracks.items[key].artists[0].name;
            var trackAlbumName = data.tracks.items[key].album.name;
            var trackNumber = data.tracks.items[key].track_number;
            var previewURL = data.tracks.items[key].preview_url;

            if (!previewURL) {
                previewURL = 'Not Available';
            }

            console.log('Song Name: ' + trackName);
            console.log('Artist Name: ' + trackArtistName);
            console.log('Album Name: ' + trackAlbumName);
            console.log('Track number: ' + trackNumber);
            console.log('Preview link: ' + previewURL);

            console.log('\n--------------- Song '+ i + ' ---------------\n')

            i++

        }

        // console.log(JSON.stringify(trackArtist,null,2));


      });
}

module.exports.GetTrack = GetTrack;
