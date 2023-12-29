import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

//this test is designed just to check whether the top nav of new homepage is working fine

fixture `Live-Home Page TopNav`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com//login`
      
    dataset.forEach(data => {
     test(`HomePage - LoggedInSearchfunction -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .wait(6000)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        //.expect(page.jumpbackin.visible).eql(true)
        //.expect(page.recommendedblock.visible).eql(true)
        .click(page.SearchButton)
         //.click(page.viewbeta)
        .wait(5000)
            });     
         });

    dataset.forEach(data => {
     test(`Home Page - LoggedInBrowseCategory -  '${data.email}'`, async t => {
        await t
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .wait(5000)
       .click (page.BrowseCategory)
       .click(page.selectCategory)
       .wait(5000)
       
 });
});

    dataset.forEach(data => {
     test(`Home Page - LoggedInRecentTab -  '${data.email}'`, async t => {
       await t
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .wait(5000)
       .click (page.RecentTab)
       .wait(5000)
      
});
});
   test('Home page - LoggedOut', async t => {
        await t
        .navigateTo(`https://subscription.packtpub.com/ `)
        //.expect(page.jumpbackin.visible).eql(false)
        .expect(page.SignInButton.visible).eql(true)
        .click (page.SignInButton)
       .wait(5000)
       
   });

  