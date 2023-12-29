import { takeSnapshot } from 'testcafe-blink-diff';
import page from './Live_page-model';

const dataset = require ('./Live_accountdata.json');

fixture `Live - Visual FreeeBook Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription.packtpub.com/login`
      
        dataset.forEach(data => {
            test(`FreeeBook Page  -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               //.expect(page.Recomtitle).ok()
               .navigateTo(`https://www.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 2000
               }); 
            });
        });
       test(`FreeeBook Page - Book - Logged Out`, async t => {
        await t
           .navigateTo(`https://www.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 2000
           }); 
       });