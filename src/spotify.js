const SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
const { readFileSync } = require('fs');
require('dotenv').config();

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

// Create a playlist on Spotify
const createPlaylistOnSpotify = async (playlistName) => {
    // Create playlist
    const playlist = await spotifyApi.createPlaylist(playlistName, { 'public': false });
    return playlist.body.id; // Return Spotify playlist ID
};

// Add tracks to a Spotify playlist
const addTracksToSpotifyPlaylist = async (spotifyPlaylistId, tracks) => {
    // Add tracks to playlist in batches of 100
    const batchSize = 100;
    const totalTracks = tracks.length;

    for (let i = 0; i < totalTracks; i += batchSize) {
        const batch = tracks.slice(i, i + batchSize);
        await spotifyApi.addTracksToPlaylist(spotifyPlaylistId, batch);
    }
};

// Search for a track on Spotify
const searchTrackOnSpotify = async (trackName, artistName) => {
    // Search for the track
    const searchResult = await spotifyApi.searchTracks(`${trackName} ${artistName}`, { limit: 1 });
    // Extract Spotify track ID from the search result
    const spotifyTrackId = searchResult.body.tracks.items[0].uri;
    return spotifyTrackId;
};

const uploadToSpotify = async () => {
    console.log('Uploading playlists to Spotify...');
    const anghamiPlaylists = JSON.parse(readFileSync('anghami.json'));
    // Create a Spotify playlist for each Anghami playlist
    for (const anghamiPlaylist of anghamiPlaylists) {
        const spotifyPlaylistId = await createPlaylistOnSpotify(anghamiPlaylist.name);
        const spotifyTracksId = [];
        // Loop through songs in the Anghami playlist
        for (const song of anghamiPlaylist.songs) {
            try {
                // Search for the song on Spotify
                const spotifyTrackId = await searchTrackOnSpotify(song.title, song.artist);
                spotifyTracksId.push(spotifyTrackId);
            } catch (e) {
                console.error(song.title + ' by ' + song.artist + ' was not found on spotify!');
            }
        }
        // Add the track to the Spotify playlist
        await addTracksToSpotifyPlaylist(spotifyPlaylistId, spotifyTracksId);
        console.log('--------------------------------------------------------');
        console.info(`Playlist "${anghamiPlaylist.name}" uploaded to Spotify.`);
        console.log('--------------------------------------------------------');
    }
};

const app = express();

app.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get('/callback', async (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
        console.error('Callback Error:', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    try {
        const data = await spotifyApi.authorizationCodeGrant(code);
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];

        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);

        console.log('access_token:', access_token);
        console.log('refresh_token:', refresh_token);

        console.log(
            `Successfully retrieved access token. Expires in ${expires_in} s.`
        );
        setInterval(async () => {
            const data = await spotifyApi.refreshAccessToken();
            const access_token = data.body['access_token'];

            console.log('The access token has been refreshed!');
            console.log('access_token:', access_token);
            spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);
        await uploadToSpotify();
        console.log('Playlists uploaded to Spotify successfully.');
        res.status(200).send('Playlists uploaded to Spotify successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error getting Tokens:', error);
        res.send(`Error getting Tokens: ${error}`);
    }
});

function startServer() {
    app.listen(3000, () =>
        console.log(
            'HTTP Server up. Now go to http://localhost:3000/login in your browser.'
        )
    );
}

module.exports = startServer;

