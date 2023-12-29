import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Register Page`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login` 
      
   
   test('ReaderPage guest', async t => {
      await t
      .typeText(page.loginemail, "paahoon@test.com")
        .typeText(page.loginpassword, "Test@123")
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/book/web_development/9781800560444/5/ch05lvl1sec24/summary')
      .expect(page.UnlockAccess.visible).ok();
       await t.expect(page.BrowseLibrary.visible).ok();
       await t.expect(page.MyLibrary1.visible).Ok();
       await t.expect(page.MyAccount.visible).notOk();
       await t.expect(page.Signout.visible).notOk();
});


  test(`Reader_RHS`, async t => {
    await t
    .typeText(page.loginemail, "paahoon@test.com")
        .typeText(page.loginpassword, "Test@123")
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/book/web_development/9781800560444/5/ch05lvl1sec24/summary')
      .click(page.OpenTitle)
       .click(page.DayNight)
       .click(page.ChangeFont)
       .click(page.LargeFont)
       .click(page.LargestFont)
       .click(page.SmallFont)
       .click(page.DefaultFont)
       
       
       
   });