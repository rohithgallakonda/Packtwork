import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Staging - ExistingReader`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`ExistingReader - LoggedInUser -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .wait(3000)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        //.expect(page.jumpbackin.visible).eql(true)
        .expect(page.recommendedblock.visible).eql(true)
        // .click(page.selectjbititle)
        .click(page.RecommendedTitle)
        // resizing the window since it was too small to see all the tests performing in a browser
        .resizeWindow(1300,800)
        .click(page.AddPlaylist)
        .click(page.CreateNewPlaylist)
        //.expect(page.CreatePlaylist.innertext).eql('Create', 'message', options)
        .click(page.cancel)
        .wait(3000)
        //.click(page.BuyEbook) 
        //'BuyEbook' option not working at the moment for some users instead they have discounted price on that
        // to close the another active window from BuyEbook
        // .closeWindow()
        .click(page.DayNightIcon)
        .wait(5000)
        .click(page.FontIcon)
        .wait(5000)
        .click(page.share)
         .wait(5000)
        });     
     });

     dataset.forEach(data => {
      test(`ExistingReader - MyLibrary -  '${data.email}'`, async t => {
         await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .click(page.MyLibrary)
        .wait(3000)
        //.click(page.Home)
        //.closeWIndow()
        .click(page.selectCategory)
        .wait(3000)
        
  });
 });

     dataset.forEach(data => {
      test(`ExistingReader - Browse -  '${data.email}'`, async t => {
         await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .click (page.BrowseCategory)
        .click(page.selectCategory)
        .wait(3000)
        
  });
 });
 
     dataset.forEach(data => {
      test(`ExistingReader - Recent -  '${data.email}'`, async t => {
        await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .click (page.RecentTab)
        .wait(3000)
       
 });
 });

    dataset.forEach(data => {
      test(`ExistingReader - Recent -  '${data.email}'`, async t => {
       await t
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .wait(3000)
       .click (page.Account)
       .wait(3000)
    
});
});

     test('ExistingReader - LoggedOutUser', async t => {
      await t
      .navigateTo(`https://subscription-staging.packtpub.com/`)
      .expect(page.recommendedblock.visible).eql(true)
      .click(page.RecommendedTitle)
      .resizeWindow(1300,800)
      .wait(3000)
      .click(page.Buy_Ebook)
      .closeWindow()
      .click(page.FontA)
      .wait(5000)
      .click(page.shareLogout)
      .wait(10000)
 });

 //{ "email": "guestuser1@gmail.com", "password": "Pword123" },
 //{ "email": "trialuser1@gmail.com", "password": "Pword123" },
 //{ "email": "monthuser1@gmail.com", "password": "Pword123" },
 //{ "email": "annualuser1@gmail.com", "password": "Pword123" },
 //{ "email": "18mnthuser1@gmail.com", "password": "Pword123" }

// {"email": "betareader@gmail.com", "password": "Test@123"}