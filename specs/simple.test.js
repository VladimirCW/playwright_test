const { chromium, firefox, webkit, devices } = require("playwright");
( async () => {
    const browserTypeRaw = JSON.parse(process.env.npm_config_argv).original.filter(i => /^--browser=/.test(i))[0];
    const browserType = browserTypeRaw ? browserTypeRaw.replace(/^--browser=/, "") : "chromium";

    const browserServer = await { chromium, firefox, webkit }[browserType].launchServer(
        {
            headless: true
        }
    );
    const wsEndpoint = browserServer.wsEndpoint();
    //const wsEndpoint = 'ws://127.0.0.1:64787/acc0ecdfb86025dbe35f640dc5114c77';
    // Use web socket endpoint later to establish a connection.
    const browser = await chromium.connect({ wsEndpoint });
    //const browser = await browserType.launch({headless: false});
    browser.on("disconnected", () => console.log("The browser was disconected"));
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
    await page.screenshot({path: `screens/${browserType}_${new Date().getTime()}.png`});

    await browserServer.close();
    //await browser.close();
})();