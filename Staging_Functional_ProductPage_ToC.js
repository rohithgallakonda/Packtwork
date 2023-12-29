import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Staging-TOC Product Page`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Product Page - LoggedInCh1 -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
        .click(page.Ch1section4)
        //check scrolled down
        //await t.expect(page.scrollvalidate).visible.ok();
        .expect(page.buyEbook).ok()
         });     
     });

     dataset.forEach(data => {
     test(`Product Page - LoggedInCh2 -  '${data.email}'`, async t => {
        await t
           .typeText(page.loginemail, data.email)
           .typeText(page.loginpassword, data.password)
           .click(page.loginSubmit)
           .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
           //if not a guest do this
           //if (data.email === 'guestuser1@gmail.com') {
           //await t.click(page.closebutton)
           //click the x in the popup 
           //.click(page.closebutton)
           .click (page.chapter2)
           .click(page.tocCh2Sec1)
           .expect(page.buyEbook).ok()
           //}else{
           //copy click chapter 2 piece
          //await t.click (page.chapter2)
           //.click(page.tocCh2Sec1)
           //.expect(page.buyEbook).ok()
           //}
     });
 });

       test('Product page - LoggedOutCh1', async t => {
            await t
            .click(page.Ch1section4)
            .click(page.closebutton)
            //check scrolled down
            await t.expect(page.scrollvalidate).visible.ok();
            
            //.wait (5000);
       });

       test('Product page - LoggedOutCh2', async t => {
        await t
        .click (page.chapter2)
        .click(page.tocCh2Sec1)
        .expect(page.buyEbook).ok()
        .wait (5000);
   });


      