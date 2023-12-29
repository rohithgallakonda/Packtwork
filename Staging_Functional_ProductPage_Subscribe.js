
import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Staging - Product Page - Subscribe`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Staging - Product Page logged in subscribed user- BuyNow -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://staging-mg.packtpub.com/in/')
        //await t.hover(page.ProductSelect)
        //.click(page.ProductSelect)
        .navigateTo(`https://staging-mg.packtpub.com/product/zimbra-implement-administer-and-manage/9781847192080`)
        .click(page.loggedInBuyNow)
        await t.expect(page.ContinueShoppingButton).visible.ok();
         });     
     }); 
     

     //dataset.forEach(data => {
     test(`Product Page registered user- Subscribe`, async t => {
        await t
           .typeText(page.loginemail, "testfeb@gmail.com")
           .typeText(page.loginpassword,"Test@123")
           .click(page.loginSubmit)
           .navigateTo(`https://staging-mg.packtpub.com/product/zimbra-implement-administer-and-manage/9781847192080`)
           .click (page.loggedInSubscribe)
           await t.expect(page.SubscribeButton).visible.ok();

     });
 

       test('Product page - LoggedOutBuyNow', async t => {
            await t
            .navigateTo(`https://staging-mg.packtpub.com/product/zimbra-implement-administer-and-manage/9781847192080`)
            .click(page.loggeedOutBuyNowPrintEbook)
            //.click(page.ChapterOneSection4)
            //.click(page.closebutton)
            //check scrolled down
            await t.expect(page.ContinueShoppingButton).visible.ok();
            
            //.wait (5000);
       });

       test('Product Page - LoggedOutSubscribeNow', async t => {
        await t
        .navigateTo(`https://staging-mg.packtpub.com/product/zimbra-implement-administer-and-manage/9781847192080`)
        .click(page.loggedOutSubscribe)
        //.click (page.ChapterTwo)
        //.click(page.tocCh2Sec1)
        //.expect(page.buyEbook).ok()
        .wait (5000);
   });