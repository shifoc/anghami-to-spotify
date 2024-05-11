const axios = require('axios');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const { writeFileSync } = require('fs');
const sharp = require('sharp');

const login = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // devtools: true,
        args: [
            "--disable-web-security",
            "--disable-features=IsolateOrigins",
            "--disable-site-isolation-trials",
        ],
    });
    const page = await browser.newPage();
    // Set custom user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
    await page.goto("https://play.anghami.com/login");

    //choosing login type
    await page.waitForSelector(".other-login-btn");
    await page.click(".other-login-btn");

    //typing email
    const emailFieldSelector = 'input[name="email"]';
    await page.waitForSelector(emailFieldSelector);
    await page.type(emailFieldSelector, process.env.ANGHAMI_EMAIL);

    //clicking next
    const nextButtonSelector = 'button.login-btn-continue';
    await page.waitForSelector(nextButtonSelector);
    await page.click(nextButtonSelector);

    //typing password
    const passwordFieldSelector = 'input[name="password"]';
    await page.waitForSelector(passwordFieldSelector);
    await page.type(passwordFieldSelector, process.env.ANGHAMI_PASSWORD);

    //clicking login
    const loginButtonSelector = 'button.login-btn';
    await page.waitForSelector(loginButtonSelector);
    await page.click(loginButtonSelector);

    let sid = '';
    await page.setRequestInterception(true);
    // Intercept network requests
    page.on('request', async (interceptedRequest) => {
        // Check if the intercepted request URL matches the target endpoint
        if (interceptedRequest.url().includes('gateway.php')) {
            // Extract SID from the intercepted request
            sid = new URL(interceptedRequest.url()).searchParams.get('sid');

            // Save the SID for later use (You can save it to a file or variable)
            console.log('SID:', sid);

            // Continue intercepting requests if needed
            await interceptedRequest.continue();
        } else {
            // Continue intercepting other requests
            await interceptedRequest.continue();
        }
    });
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    await browser.close();
    return sid;
};

const anghamiCrawler = async () => {
    let SID = process.env.ANGHAMI_SID;
    if (!SID) {
        if (!process.env.ANGHAMI_EMAIL || !process.env.ANGHAMI_PASSWORD) {
            throw new Error('Email or password is not found');
        }
        SID = await login();
    }
    if (!SID) {
        throw new Error('SID is not found');
    }
    await detailsGetter(SID);
};

const detailsGetter = async (SID) => {
    const optionsCreator = (params) => {
        return {
            method: 'GET',
            url: 'https://coussa.anghami.com/gateway.php',
            params: {
                ...params,
                lang: 'en',
                language: 'en',
                output: 'jsonhp',
                web2: 'true',
                sid: SID
            },
            headers: {
                'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                Accept: 'application/json, text/plain, */*',
                Referer: 'https://play.anghami.com/mymusic',
                DNT: '1',
                'sec-ch-ua-mobile': '?0',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'sec-ch-ua-platform': '"Windows"'
            }
        };
    };

    const getPlaylists = async () => {
        const options = optionsCreator({
            angh_type: 'GETplaylists',
            type: 'GETplaylists'
        });
        const { data } = await axios(options);
        const playlists = data.sections.map(section => section.data).flat();
        return playlists;
    };

    const getPlaylistDetails = async (playlistid) => {
        const options = optionsCreator({
            angh_type: 'GETplaylistdata',
            type: 'GETplaylistdata',
            // buffered: 1,
            playlistid
        });
        const { data } = await axios(options);
        return data;
    };

    const fetchAndEncodeImage = async (imageId) => {
        try {
            // Fetch the image data from the URL
            const response = await axios.get(`https://artwork.anghcdn.co/webp/?id=${imageId}&size=296`, { responseType: 'arraybuffer' });
            const imageData = Buffer.from(response.data, 'binary');

            // Resize the image if necessary to fit the payload size limit
            const resizedImageData = await sharp(imageData)
                .jpeg()
                .toBuffer();

            // Convert the resized image data to Base64
            const base64ImageData = resizedImageData.toString('base64');

            return base64ImageData;
        } catch (error) {
            console.error('Error fetching or encoding image:', error);
            return null;
        }
    }

    let playlists = [];
    for (const playlist of await getPlaylists()) {
        const playlistDetails = await getPlaylistDetails(playlist.id);
        const playlistDetailItem = {};
        playlistDetailItem.playlistName = playlistDetails.PlaylistName;
        playlistDetailItem.ownerID = playlistDetails.OwnerID;
        playlistDetailItem.userID = playlistDetails.UserID;
        if (playlistDetails.coverartmeta === 'custom' && playlistDetails.coverArtID) {
            playlistDetailItem.coverArt = await fetchAndEncodeImage(playlistDetails.coverArtID);
        } else {
            playlistDetailItem.coverArt = null;
        }
        playlistDetailItem.songs = playlistDetails.sections.find(section => section.displaytype === 'list').data;
        playlists.push(playlistDetailItem);
    }
    writeFileSync('anghami.json', JSON.stringify(playlists, null, 2), 'utf8');
    return playlists;
}

module.exports = anghamiCrawler;