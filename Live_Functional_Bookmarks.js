import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Bookmarks`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Bookmarks Add&Delete -  '${data.email}'`, async t => {
      const res = t

      .typeText(page.loginemail, data.email)
      
      .typeText(page.loginpassword, data.password)
      
      .click(page.loginSubmit)
      
      .navigateTo('https://subscription.packtpub.com/book/web_development/9781800562523/1')
      
      const xyz = page.TrialBanner.exists
      
      console.log(xyz,"sahigalattttttttttttttttttttt")
      if(xyz) {
      console.log("if ke andar hu bhaisaab")
      await res.click(page.AddGuestBookmark)
      
      .click(page.BookmarksRHSopen)
      
      .click(page.BookmarksRHSmenu)
      
      } else {
      console.log("else starts here")
      await res.click(page.AddBookmark)
      
      .click(page.BookmarksRHSopen)
      
      .click(page.BookmarksRHSmenu)
      
      }    
     });
    });

    dataset.forEach(data => {
      test(`Multiple Bookmarks in same book-  '${data.email}'`, async t => {
         await t
         .typeText(page.loginemail, data.email)
         .typeText(page.loginpassword, data.password)
         .click(page.loginSubmit)
         .navigateTo('https://subscription.packtpub.com/book/web_development/9781800562523/2/ch02lvl1sec15/operators')
         .click(page.AddBookmark)
         .click(page.AddBookmark2)
         .click(page.AddBookmark3)
         .click(page.BookmarksRHSopen)
         .click(page.BookmarksRHSmenu)
      });
  });