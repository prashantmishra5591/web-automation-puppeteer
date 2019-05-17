const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({headless: false,args: [ '--window-size=1920,1040'] }); // default is true args: ['--start-fullscreen', '--start-maximized', '--window-size=1920,1040']
    const page = await browser.newPage();
	await page.setViewport({width: 1920, height: 1080})
    await page.goto('http://eps-customizer.azurewebsites.net/Artboard.html?size=16&cat=DWT', {
        waitUntil: "networkidle2",
		timeout: 120000
    });
    
    // For Opening Images toolbar
    await page.click('#optImages', {waitUntil: "networkidle2"});
	 
        await page.waitFor(3000);

     // For selecting Images from "My Devices".  
	const filePath = path.relative(process.cwd(), __dirname + '/assets/abd.jpg');
	  
      const input = await page.$('#txtUploadFile');
      
      await input.uploadFile(filePath); 
    
      await page.waitFor(3000);
      
    // For Clicking "Submit" button 
    await page.click('#btnSubmitDesign', {waitUntil: "networkidle2" });

     await page.waitForSelector("#onNavigateSaveConfirmModal", { "visible": true });
     
    // For clicking "No" button from Login window pop up
     let ele = await page.$('#onNavigateSaveConfirmModal .general-btn:nth-child(2)');
	    ele.click();


    await page.screenshot({
        path: 'eps.png'
    });

   // await browser.close();

})();

