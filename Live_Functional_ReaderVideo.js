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
        .navigateTo('https://subscription.packtpub.com/video/web_development/9781801812603/p1/video1_1/welcome-to-the-course')
        .expect(page.BrowseLibrary.visible).ok();
       await t.expect(page.SearchTitle.visible).ok();
       await t.expect(page.MyLibrary1.visible).ok();
       await t.expect(page.MyAccount.visible).ok();
       await t.expect(page.Signout.visible).ok();
     await t.click(page.GoNextSection)
       
        
    });
});