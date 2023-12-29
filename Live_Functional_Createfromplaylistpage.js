import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Playlist`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Playlist - open '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .click(page.mylibrary2)
        .navigateTo('https://subscription.packtpub.com/playlists')
        .click(page.selectplaylist)
        .click(page.playlist2playlist)
        .click(page.addtoplaylist1)
        .click(page.newplaylist)
        .typeText(page.addname, "automation") //rename playlist whenever you run it
        .click(page.CreateButton)
        .navigateTo('https://subscription.packtpub.com/playlists')


         });     
     });
