const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch( {headless: false}); // default is true {headless: false}
    const page = await browser.newPage();
    await page.goto('http://eps-customizer.azurewebsites.net/Artboard.html?size=16&cat=DWT', {
        waitUntil: "networkidle0",
		timeout: 1200000
    });
	
	await page.click('#optionGetUserProjects', { waitUntil: "networkidle0" });
	 console.log('1');
	await page.waitForSelector('#LoginModal', { "visible": true, timeout: 120000 });
	 console.log('2');
	 await page.focus('#textUserName');
	 await page.evaluate((text) => { (document.getElementById('textUserName')).value = text; }, "prashant.mishra.hs@gmail.com");
 console.log('3');
	 await page.focus('#textPassword');
	 await page.evaluate((text) => { (document.getElementById('textPassword')).value = text; }, "Tester@123");
	  console.log('4');
	  
	//  await page.keyboard.press('Enter');


	  
	  
	  
	 
	//await page.$eval('#textUserName', el => el.value = 'prashant.mishra.hs@gmail.com');
	//await page.focus('#textPassword');
	//await page.$eval('#textPassword', el => el.value = 'Tester@123');
	//await  page.type('#textUserName', 'prashant.mishra.hs@gmail.com');
	//await  page.type('#textPassword', 'Tester@123');
	
	 
	 // await Promise.all([
		// page.waitForFunction('document.querySelector("#textPassword").value.length > 1')
	// ]);
	// console.log('4');
	 
	//await page.waitForFunction('document.querySelector("#textPassword").value.length > 1');
	
	/*
	.then(()=>{
		 const btnNext =  page.$$('#divLoginModal button:first-child');
		 //btnNext.click();
		  console.log(btnNext);
		 
	 });
	*/
	
	// console.log('5');
	 
	 
	 // await page.click('#textUserName');
// await page.keyboard.type('prashant.mishra.hs@gmail.com');
// await page.keyboard.press('Enter');
	 
	//await page.evaluate((text) => { (document.getElementById('textUserName')).value = text; }, "prashant.mishra.hs@gmail.com");
	 // await page.evaluate((text) => { (document.getElementById('textPassword')).value = text; }, "Tester@123");
	/*
	await page.focus('#textUserName')
page.keyboard.type("prashantmishra.hs@gmail.com");
	await page.waitFor(4000);
	
	await page.focus('#textPassword')
page.keyboard.type("Tester@123");
	
*/

 //await page.type("#textUserName", "prashant.mishra.hs@gmail.com", {delay: 100});
   // await page.type("#textPassword", "Tester@123");
	
	
	await page.waitFor(1800);
	
	// console.log('5');
	 
	
	 
	  // await page.evaluate((inputSelector, text) => {
   // Refer to https://stackoverflow.com/a/46012210/440432 for the below solution/code
	  // const inputElement = document.querySelector(inputSelector);
    // const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    // nativeInputValueSetter.call(inputElement, text);

    // const ev2 = new Event('input', {bubbles: true});
    // inputElement.dispatchEvent(ev2);

  // },  "#textUserName", 'prashant.mishra.hs@gmail.com');
  
  
	 
	//var btn = document.getElementById("divLoginModal").getElementsByTagName("button")[0];
//	btn.click();
	
await page.evaluate(() => {
 console.log('22');
  //document.querySelector('#textUserName').value = 'prashant.mishra.hs@gmail.com';
   //document.querySelector('#textPassword').value = 'Tester@123';
  
	  return document.getElementById("onNavigateSaveConfirmModal").getElementsByClassName("general-btn")[1].click();
     }); 
	 
	 

	 
	// console.log(btn);
	 
	 
	 //await page.waitForSelector('#mySavedProjects', { "visible": true });
	 
	 await page.screenshot({  path: 'epslogin.png'});
		
	// await page.type('#textUserName', prashant.mishra.hs@gmail.com);
	// await page.type('#textPassword', Tester@123);
	// await page.click('input[type="button"]');

/*
	await page.click('#optImages', {  waitUntil: "networkidle2" });
		await page.waitForSelector("#addImageModal", { "visible": true });
	
	await page.evaluate(() => {

         var aList = document.getElementsByTagName("a");
          for (i = 0; i < aList.length; i++) {
              if (aList[i].getAttribute('title') == 'My Saved Images') {
                 aList[i].click();
              }
         }

      });
	  
	await page.waitForSelector("#mySavedImageModal", { "visible": true });


	  await page.screenshot({  path: 'epslogin.png'});
	
	*/


    //await browser.close();
})();


