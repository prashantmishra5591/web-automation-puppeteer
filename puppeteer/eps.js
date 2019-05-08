const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({headless: false,args: ['--start-maximized', '--window-size=1920,1040'] }); // default is true args: ['--start-fullscreen', '--window-size=1920,1040']
    const page = await browser.newPage();
	await page.setViewport({width: 1920, height: 1080})
    await page.goto('http://eps-customizer.azurewebsites.net/Artboard.html?size=16&cat=DWT', {
        waitUntil: "networkidle2",
		timeout: 1200000
    });

    /*await page.evaluate(() => {
    
    document.getElementById('optBg').click();
}); */

    // await page.click('#optBg'); 
	
    await page.click('#optImages', {waitUntil: "networkidle2" });
	
	//await page.waitForSelector("#addImageModal", { "visible": true });
	
     await page.evaluate(() => {

         var aList = document.getElementsByTagName("a");
          for (i = 0; i < aList.length; i++) {
              if (aList[i].getAttribute('title') == 'My Device') {
                 //aList[i].click();
              }
         }

      });
	 
	   await page.waitFor(3000);
	   
	   const filePath = path.relative(process.cwd(), __dirname + '/assets/2.jpg');
	   console.log(filePath);
	  const input = await page.$('#txtUploadFile');
	  await input.uploadFile(filePath);
	//await input.uploadFile("C:/Users/admin/Downloads/images/abd.jpg");
	
	  await page.waitFor(3000);
// await page.waitForSelector("#nosavedImageModal", { "visible": true });

 await page.click('#btnSubmitDesign', {waitUntil: "networkidle2" });

 let ele = await page.$('#onNavigateSaveConfirmModal .general-btn:nth-child(2)');
	//console.log(ele);
	ele.click();

/*
await page.evaluate(() => {
 console.log('22');
  
	  return document.getElementById("onNavigateSaveConfirmModal").getElementsByClassName("general-btn")[1].click();
     }); 
	*/ 

    await page.screenshot({
        path: 'eps.png'
    });

   // await browser.close();
})();