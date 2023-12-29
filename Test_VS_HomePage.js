import { takeSnapshot } from 'testcafe-blink-diff';
import page from './page-model';

const dataset = require ('./accountdata.json');

fixture `Staging - Visual Home Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription-staging.packtpub.com/login`
      
        dataset.forEach(data => {
            test(`Home Page  -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               .wait(9000)
               //.expect(page.Recomtitle).ok()
               //.navigateTo(`https://subscription-staging.packtpub.com/`)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 5000
               }); 
            });
        });
       test(`Home Page - Book - Logged Out`, async t => {
        await t
           .navigateTo(`https://subscription-staging.packtpub.com/`)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 9000
           }); 
       });