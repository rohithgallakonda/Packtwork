import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Staging - OwnedPage`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Owned - Readtitle -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://subscription-staging.packtpub.com/owned')
        .click(page.ReadOwned)       
      
      });  
    });

    dataset.forEach(data => {
      test(`Ownedpage_Pagination-  '${data.email}'`, async t => {
      await t
         
         .typeText(page.loginemail, data.email)
         .typeText(page.loginpassword, data.password)
         .click(page.loginSubmit)
         .navigateTo('https://subscription-staging.packtpub.com/owned')
         .click(page.Twelve)
         .click(page.Twentyfour)
         .click(page.FortyEight)
         .typeText(page.SearchOwned, "python")
         .click(page.Search)
         .wait(4000)
     });
  });
