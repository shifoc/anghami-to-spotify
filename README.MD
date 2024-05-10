# Anghami to Spotify Migrator

This script facilitates the migration of your Anghami playlists to Spotify playlists by logging into both platforms.

## Installation
This script runs on Node.js. If you haven't already, you can install it by following the instructions on the Node.js website.

## Using Your Own Credentials
### Spotify:
Register your app and obtain your credentials from the Spotify for Developers Dashboard.
Create a new app in the dashboard and add http://localhost:3000/callback to the app's redirect URL list.
After creating your app, update the .env file with the client ID and client secret obtained from the app settings in the dashboard.
```env
SPOTIFY_CLIENT_ID="YOUR_CLIENT_ID"
SPOTIFY_CLIENT_SECRET="YOUR_CLIENT_SECRET"
SPOTIFY_REDIRECT_URI="http://localhost:3000/callback"
```

### Anghami:
Log in to Anghami and open the developer tools to obtain the session ID from the payload of a request.
Add the session ID to the .env file:
```env
ANGHAMI_SID="YOUR_SESSION_ID"
```
Alternatively, you can add your own Anghami credentials to the .env file:

```env
ANGHAMI_EMAIL="YOUR_EMAIL"
ANGHAMI_PASSWORD="YOUR_PASSWORD"
```

## Running the Example
From a console shell:

```bash
node run start
```
Then open http://localhost:3000 in your browser and follow the instructions.