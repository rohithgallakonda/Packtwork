import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Reader`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Reader_Header-  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/book/web_development/9781800560444/5/ch05lvl1sec24/summary')
        .expect(page.BrowseLibrary.visible).ok();
       expect(page.SearchTitle.visible).ok();
       await t.expect(page.MyLibrary1.visible).ok();
       await t.expect(page.MyAccount.visible).ok();
       await t.expect(page.Signout.visible).ok();
    //need to put assertion to compare image text with title text , where both needs to be same
       
        
    });
});

dataset.forEach(data => {
    test(`Reader_Credits-  '${data.email}'`, async t => {
    await t
       
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .navigateTo('https://subscription.packtpub.com/book/web_development/9781800560444/5/ch05lvl1sec24/summary')
       .click(page.UseCredits)
       .click(page.CancelPurchase)
       .click(page.MoreInfo)
       .expect(page.AboutTitle.visible).ok();
       await t.expect(page.PrintEbook.visible).ok();
       await t.expect(page.buyEbook.visible).ok();
       await t.click
   });
});

dataset.forEach(data => {
    test(`Reader_Credits-  '${data.email}'`, async t => {
    await t
       
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .navigateTo('https://subscription.packtpub.com/book/web_development/9781800560444/5/ch05lvl1sec24/summary')
       .click(page.collapseTOC)
       .click(page.ExpandTOC)
       .click(page.UseCredits)
       .click(page.CancelPurchase)
       .click(page.MoreInfo)
       .expect(page.AboutTitle.visible).ok();
       await t.expect(page.PrintEbook.visible).ok();
       await t.expect(page.buyEbook.visible).ok();
       
   });
});
dataset.forEach(data => {
    test(`Reader_RHS-  '${data.email}'`, async t => {
    await t
       
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .navigateTo('https://subscription.packtpub.com/book/web_development/9781800560444/5/ch05lvl1sec24/summary')
       .click(page.DayNight)
       .wait(1000)
       .click(page.DayNight)
       .click(page.ChangeFont)
       .click(page.LargeFont)
       .click(page.LargestFont)
       .click(page.SmallFont)
       .click(page.DefaultFont)
       
       
   });
});