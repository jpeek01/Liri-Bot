# Liri-Bot

## Function
Liri-Bot is a Node JS app that will return data from three APIs: Spotify, Bands in Town, and Open Movie Database.

## User
From the command line type the following commands

* To get Spotify songs
    * CLI: node liri spotify-this-song [song name]
    * Example: node liri spotify-this-song Jane Says
* To get movie data
    * CLI: node liri movie-this [Movie name]
    * Example: node liri spotify-this-song Forrest Gump
* To get a bands latest tour dates
    * CLI: node liri concert-this [Band name]
    * Example: node liri spotify-this-song Metallica

###If multiple songs exist then Spotify will return them and Liri will display all of them.
###If concerts/venues exist for a Band then Bands In Town will return them and Liri will display all of them.
###The Open Movie Database will only return the most recenct movie based on the name submitted

