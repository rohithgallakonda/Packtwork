import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - RelatedTItle`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Reader RT -  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/book/web_development/9781800562523/1')
       //.expect(page.RelatedTile)
        .wait(5000)
        .click(page.HideRelatedTitles)
        .wait(2000)
        .click(page.HideRelatedTitles)
        .click(page.GoToRelatedTitle)

    });
});