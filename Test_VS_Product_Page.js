import { takeSnapshot } from 'testcafe-blink-diff';
import page from './page-model';

const dataset = require ('./accountdata.json');

fixture `Staging - Visual Product Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription-staging.packtpub.com/login`
      

        dataset.forEach(data => {
            test(`Product Page - Book -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               .wait(10000)
               //.expect('#nav-browse > span').ok()
               .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
               .click(page.chapter2)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 2000
               }); 
            });
        });


       test(`Product Page - Book - Logged Out`, async t => {
        await t
           .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
           .click(page.chapter2)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 2000
           }); 
       });


        dataset.forEach(data => {
            test(`Product Page - Video -  '${data.email}'`, async t => {
                await t
                    .typeText(page.loginemail, data.email)
                    .typeText(page.loginpassword, data.password)
                    .click(page.loginSubmit)
                   // .expect('#nav-browse > span').ok()
                    .navigateTo(`https://staging-mg.packtpub.com/product/nodejs-the-complete-guide-video/9781838826864`)
                    .click(page.chapter2)
                        await takeSnapshot(t, {
                            fullPage: true,
                            timeout: 2000
                        }); 
                });
        });    


            test(`Product Page - Video - Logged Out`, async t => {
                await t
                    .navigateTo(`https://staging-mg.packtpub.com/product/nodejs-the-complete-guide-video/9781838826864`)
                    .click(page.chapter2)
                        await takeSnapshot(t, {
                            fullPage: true,
                            timeout: 2000
                        }); 
            });
