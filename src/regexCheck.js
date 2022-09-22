import cron from 'node-cron';
import puppeteer from 'puppeteer';

export async function regexCheck(source) {
    // make sure the source's regex pattern is still the same
    // if same, do nothing
    // if different, send email to an admin with SendGrid??
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(source.baseUrl);


    // let links = await page.$$eval("a", (as) => {
    //     return as.map((a) => a.href)
    // });

    // const polReg = /https:\/\/www\.nationalreview\.com\/corner\/.+$/;
    // const polRegDigits = /https:\/\/www\.nationalreview\.com\/\d{4}\/\d{2}\/.+$/

    // links = links.filter((l) => {
    //     return polReg.test(l);
    // });

    // links = links.filter((l) => {
    //     if (l.includes("#disqus_thread")) {
    //         return false;
    //     }
    //     return true;
    // });
};
