import puppeteer from 'puppeteer';

const func = async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    await page.goto('https://www.example.com');

    // await browser.close();
};

func();