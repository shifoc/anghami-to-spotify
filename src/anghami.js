const axios = require('axios');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const { writeFileSync } = require('fs');

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
    await Promise.all([
        await page.click(".other-login-btn"),
        await delay(1000)
    ]);

    //typing email
    const emailFieldSelector = "#ang_app > anghami - login - page > div > div.login - section > anghami - main - login > div > anghami - more - ways - login > div > div > form > span > input";
    await page.waitForSelector(emailFieldSelector);
    await page.type(emailFieldSelector, process.env.email);

    //clicking next
    await page.click('#ang_app > anghami - login - page > div > div.login - section > anghami - main - login > div > anghami - more - ways - login > div > div > form > button');

    //typing password
    const passwordFieldSelector = 'input[name="password"]';
    await page.waitForSelector(passwordFieldSelector);
    await page.type(passwordFieldSelector, process.env.password);

    await Promise.all([
        await page.click(
            "#ang_app > anghami-login-page > div > div.login-section > anghami-main-login > div > anghami-fill-email-password > div > div > form > button"
        ),
        page.waitForNavigation({ waitUntil: "networkidle0" })
    ]);

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
    await browser.close();
    return sid;
};

const anghamiCrawler = async () => {
    let SID = process.env.ANGHAMI_SID;
    if (!SID) {
        if (!process.env.email || !process.env.password) {
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
    let playlists = [];
    for (const playlist of await getPlaylists()) {
        const playlistDetails = await getPlaylistDetails(playlist.id);
        const playlistDetailItem = {};
        playlistDetailItem.name = playlistDetails.name;
        playlistDetailItem.songs = playlistDetails.sections.find(section => section.displaytype === 'list').data;
        playlists.push(playlistDetailItem);
    }
    writeFileSync('anghami.json', JSON.stringify(playlists, null, 2), 'utf8');
    return playlists;
}

module.exports = anghamiCrawler;