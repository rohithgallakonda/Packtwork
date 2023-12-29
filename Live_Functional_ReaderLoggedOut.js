import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Register Page`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com` 
      
   
   test('ReaderPage', async t => {
      await t
      .click(page.OpenTitle)
      .expect(page.UnlockAccess.visible).ok();
     await t .expect(page.BrowseLibrary.visible).ok();
       await t.expect(page.MyLibrary1.visible).notOk();
       await t.expect(page.MyAccount.visible).notOk();
       await t.expect(page.Signout.visible).notOk();
});
test(`Reader_RHS`, async t => {
    await t
    .click(page.OpenTitle)
       .click(page.DayNight)
       .click(page.ChangeFont)
       .click(page.LargeFont)
       .click(page.LargestFont)
       .click(page.SmallFont)
       .click(page.DefaultFont)
       
       
   });