import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Playlist`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`New - Search '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .maximizeWindow()
        .navigateTo('https://subscription.packtpub.com/search?query=')
        .typeText(page.SearchBox, "Python")
        .click(page.Searchh)
        .click(page.RemoveSelection)
        .click(page.Filter1)
        .click(page.Selection2)
        .click(page.Filter2)
        .click(page.RemoveFilter)
        //.wait(2000)
        .click(page.Toggle)
        .click(page.Option24)
        .click(page.Toggle)
        .click(page.Option48)
        .doubleClick(page.ListView)
        .expect(page.plusbuttononcard.visible).ok();

         });     
     });