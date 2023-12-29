import { takeSnapshot } from 'testcafe-blink-diff';
//import { stagingRequestHook } from './test-access';
import page from './Live_page-model';

const dataset = require ('./Live_accountdata.json');
const isbnset = require ('./Live_ISBNdata.json');

//const customHook = new stagingRequestHook(/https?:\/\/.+?\.packtpub\.com\/.*/);

fixture `Live - Reader Page Formatting Checks`
    .meta({type: "visual"})
    //.requestHooks(customHook)
    .page `https://subscription.packtpub.com/login`
      

      
            test(`Beta Reader Formatting-  '${isbnset[0].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[0].ReaderLink)
               //clicks the beta link to go to beta reader
               .wait(15000)
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idContainer016 > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });
     

            test(`Beta Reader Formatting-  '${isbnset[1].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[1].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idContainer091 > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });            

            test(`Beta Reader Formatting-  '${isbnset[2].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[2].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch08lvl1sec40 > div > h3')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });               


            test(`Beta Reader Formatting-  '${isbnset[3].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[3].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idContainer113 > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });     

            test(`Beta Reader Formatting-  '${isbnset[4].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[4].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch02lvl1sec15 > div > section:nth-child(3) > header > h1')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });     

            test(`Beta Reader Formatting-  '${isbnset[5].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[5].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch03lvl1sec23 > div > section:nth-child(2) > article > p.CDPAlignCenter.CDPAlign > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[6].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[6].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch03lvl1sec31 > div > section:nth-child(4) > article > ul:nth-child(6) > li > strong')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[7].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[7].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch04lvl1sec33 > div > section:nth-child(4) > article > p:nth-child(4) > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[8].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[8].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch04lvl1sec37 > div > section:nth-child(4) > article > table > thead > tr > th:nth-child(1)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[9].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[9].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > div.titlepage > div > div > h2')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[10].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[10].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > div.titlepage > div > div > h2')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[11].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[11].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#copyCode-0')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[12].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[12].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#copyCode-0')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[13].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[13].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch05lvl1sec24 > div > ol > li:nth-child(5)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[14].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[14].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch01lvl1sec11 > div > div:nth-child(9) > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[15].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[15].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch02lvl1sec15 > div > div:nth-child(14) > div.titlepage > div > div > h3')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[16].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[16].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch04lvl1sec27 > div > div:nth-child(14) > div:nth-child(7) > div > div > div > button')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[17].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[17].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch03lvl1sec22 > div > div:nth-child(24) > div:nth-child(11) > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[18].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[18].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#book-section-ch09lvl1sec70 > div > p:nth-child(14)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[19].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[19].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idContainer045 > ol > li:nth-child(1)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[20].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[20].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idParaDest-57')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[21].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[21].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idContainer103 > ol:nth-child(16) > li:nth-child(1)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[22].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[22].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idParaDest-430')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[23].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[23].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#table007-2 > tbody > tr:nth-child(1) > td:nth-child(1) > p')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[24].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[24].ReaderLink)
               //clicks the beta link to go to beta reader
               .click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#_idContainer286 > ol:nth-child(16) > li:nth-child(2)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[25].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[25].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#figureanchor1-2')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[26].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[26].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#c04-feafxd-0002 > p > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[27].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[27].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#table3-1 > b')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[28].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[28].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#c06-feafxd-0004 > div:nth-child(11)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[29].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[29].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#Page_10')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[30].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[30].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > section > section:nth-child(1) > section > p:nth-child(3)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[31].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[31].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > section > section:nth-child(1) > section:nth-child(7) > h2')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[32].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[32].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > section > section:nth-child(1) > h1 > span')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[33].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[33].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > section > section:nth-child(1) > aside > section > h2 > span > b')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[34].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[34].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#reader-content > div:nth-child(1) > div.book-content > div.ng-binding > div > section > section:nth-child(1) > section:nth-child(4) > section > h3 > i')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[35].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[35].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#c17-para-0015 > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[36].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[36].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#head-2-36')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[37].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[37].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#copyCode-0')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[38].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[38].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#Page_604 > figure > img')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[39].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[39].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#head-2-136')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    

            test(`Beta Reader Formatting-  '${isbnset[40].bookType}'`, async t => {
                //const goto = Selector('#_idContainer016 > img');
            await t
               .typeText(page.loginemail, "trialuser4@gmail.com")
               .typeText(page.loginpassword, "Pword123")
               .click(page.loginSubmit)
               .wait(5000)
               //.expect('#nav-browse > span').ok()
               //goes to existing reader
               .navigateTo(isbnset[40].ReaderLink)
               //clicks the beta link to go to beta reader
               //.click(page.beta)
               .wait(3000)
               .maximizeWindow()
               .wait(1000)
              .hover('#c27-sec-0003 > p:nth-child(6)')
               await takeSnapshot(t, {
                   //no full pages as they are so long visual scripts do not work
                   timeout: 2000
               }); 
            });    