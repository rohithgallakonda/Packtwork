import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - ERL page`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Reader RT -  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .scrollIntoView(page.ERL)
        .click(page.ERL)
       // .scrollBy('x:55', 'y:126.4000015258789')
       .click(page.CategoryFilter)
       .wait(3000)
       .click(page.ERLDetailed)
       .wait(5000)
       //.click(page.NextPage)

        
    });
});