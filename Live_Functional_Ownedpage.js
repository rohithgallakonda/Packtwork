import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Owned Page`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Owned_ReadTitle-  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/owned')
        .click(page.OwnedTitleOpen)
    });
});


dataset.forEach(data => {
    test(`Ownedpage_Pagination-  '${data.email}'`, async t => {
    await t
       
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .navigateTo('https://subscription.packtpub.com/owned')
       //.click(page.Twelve)
       //.click(page.Twentyfour)
       //.click(page.FortyEight)
       .typeText(page.SearchOwned, "python")
       .click(page.Search)
       .wait(4000)
   });
});