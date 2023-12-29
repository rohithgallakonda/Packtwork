import { takeSnapshot } from 'testcafe-blink-diff';
import page from './Live_page-model';

const dataset = require ('./Live_accountdata.json');

fixture `Live - Visual Home Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription.packtpub.com/login`
      
        dataset.forEach(data => {
            test(`Home Page  -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               .wait(10000)
               //.expect(page.Recomtitle).ok()
               //.navigateTo(`https://subscription.packtpub.com/`)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 10000
               }); 
            });
        });
       test(`Home Page - Book - Logged Out`, async t => {
        await t
           .navigateTo(`https://subscription.packtpub.com/`)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 10000
           }); 
       });