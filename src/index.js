const anghamiCrawler = require('./anghami');
const startServer = require('./spotify');
require('dotenv').config();

(async () => {
    console.log('Starting the process...');
    await anghamiCrawler();
    console.log('Uploading to Spotify...')
    startServer();
    console.log('Process completed successfully.');
})();