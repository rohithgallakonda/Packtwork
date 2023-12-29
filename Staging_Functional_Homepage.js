import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Staging-Home Page`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`HomePage - LoggedIn -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .wait(6000)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .expect(page.jumpbackin.visible).eql(true)
        .expect(page.recommendedblock.visible).eql(true)
        .click(page.selectjbititle)
         //.click(page.viewbeta)
        .wait(10000)
            });     
         });

    dataset.forEach(data => {
      test(`Home Page - LoggedInTrendingTitles -  '${data.email}'`, async t => {
    await t
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .wait(5000)
       .click (page.selecttrendingtitle)
       .wait(10000)
       
 });
});

   test('Home page - LoggedOut', async t => {
        await t
        .navigateTo(`https://subscription-staging.packtpub.com`)
        .expect(page.jumpbackin.visible).eql(false)
        .expect(page.recommendedblock.visible).eql(true)
        .click (page.selecttrendingtitle)
       .wait(5000)
       
   });

   test('HomePage - Footer', async t => {
         await t
         .navigateTo(`https://subscription-staging.packtpub.com`)
         .expect(page.usefulLinks.visible).eql(true)
         .expect(page.webdevelopment.visible).eql(true)
         .expect(page.PLayStoreCTA.visible).eql(true)
         .expect(page.appStoreCTA.visible).eql(true)
         .click (page.PLayStoreCTA)
         .wait (5000);
});