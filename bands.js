require('dotenv').config();
var request = require("request");

var argOne = process.argv[2];

const keys = require('./keys');
const bandsKey = keys.bands.apikey;

//logging
const fs = require('fs');
const moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a');

function GetBands(userQuery) {
    request('https://rest.bandsintown.com/artists/' + userQuery + '/events/?app_id=' + bandsKey, function(error, response, body) {
        // console.log('body ' + JSON.stringify(body,null,2));
        // console.log('body ' + body.length);
        // console.log(response.statusCode);

        if (!body.includes('error')) {
            var bandsData = JSON.parse(body);

            if (!error && response.statusCode === 200 ) {
                var i = 1;

                for (var key in bandsData) {
    
                    console.log('Date: ' + moment(bandsData[key].datetime).format('MMMM Do YYYY, h:mm:ss a'));
                    console.log('Venue: ' + bandsData[key].venue.name);
                    console.log('location: ' + bandsData[key].venue.city + ', ' + bandsData[0].venue.region);
                    //eventNumber.toString(i);
                    console.log('\n--------------- Event '+ i + ' ---------------\n')
                    i++;
                }
    
                fs.appendFile('server.log', '\n' + now + '\n' + JSON.stringify(body,null,2), function(err) {
                    if(err) {console.log(err)}
                });
            }else { 
                console.log('No events at this time.')
            }
        } else { 
            console.log('No events at this time.')
        }
    });
}


module.exports.GetBands = GetBands;

