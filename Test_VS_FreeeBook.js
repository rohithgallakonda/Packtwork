import { takeSnapshot } from 'testcafe-blink-diff';
import page from './page-model';

const dataset = require ('./accountdata.json');

fixture `Staging - Visual FreeeBook Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription-staging.packtpub.com/login`
      
        dataset.forEach(data => {
            test(`FreeeBook Page  -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               //.expect(page.Recomtitle).ok()
               //.expect('#nav-browse > span').ok()
               .navigateTo(`https://staging-mg.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 2000
               }); 
            });
        });
       test(`FreeeBook Page - Book - Logged Out`, async t => {
        await t
           .navigateTo(`https://staging-mg.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 2000
           }); 
       });