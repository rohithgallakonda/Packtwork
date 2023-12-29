import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Staging-Free Ebook TOC`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`FreeEbook Page - LoggedInCh1 -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        //.navigateTo('https://staging-mg.packtpub.com')
        //.click(page.freelearning)
        .navigateTo(`https://staging-mg.packtpub.com/free-ebook/extreme-c/9781789343625`)
        .click(page.Ch1section2)
        //check scrolled down
        //await t.expect(page.scrollvalidate).visible.ok();
        //.expect(page.buyEbook).ok()
         });     
     });

     dataset.forEach(data => {
     test(`FreeEbook Page - LoggedInCh2 -  '${data.email}'`, async t => {
        await t
           .typeText(page.loginemail, data.email)
           .typeText(page.loginpassword, data.password)
           .click(page.loginSubmit)
           .navigateTo(`https://staging-mg.packtpub.com/free-ebook/extreme-c/9781789343625`)
           //if not a guest do this
           //if (data.email === 'guestuser1@gmail.com') {
           //await t.click(page.closebutton)
           //click the x in the popup 
           //.click(page.closebutton)
           .click (page.ChapterTwo)
           .click(page.ChapterTwoSection3)
           .expect(page.nextSection).ok()
           //}else{
           //copy click chapter 2 piece
          //await t.click (page.chapt er2)
           //.click(page.tocCh2Sec1)
           //.expect(page.buyEbook).ok()
           //}
     });
 });

       test('Freelearning page - LoggedOutCh1', async t => {
            await t
            .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
            .click(page.clickOnEbook)
            .click(page.ChapterOneSection4)
            //.click(page.closebutton)
            //check scrolled down
            await t.expect(page.scrollvalidate).visible.ok();
            
            //.wait (5000);
       });

       test('Freelearning - LoggedOutCh2', async t => {
        await t
        .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
        .click(page.clickOnEbook)
        .click (page.ChapterTwo)
        .click(page.tocCh2Sec1)
        //.expect(page.buyEbook).ok()
        .wait (5000);
   });



