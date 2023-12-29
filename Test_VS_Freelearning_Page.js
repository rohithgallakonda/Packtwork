import { takeSnapshot } from 'testcafe-blink-diff';
import page from './page-model';

const dataset = require ('./accountdata.json');

fixture `Staging - Visual Freelearning Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription-staging.packtpub.com/login`
      
        //test to add free learning book to admin portal
        test(`Add Free Learning Book in admin portal`, async t => {
            await t    
                .navigateTo(`https://admin-staging.packtpub.com/`)
                .typeText(page.adminUserID, 'atula@packt.com')
                .typeText(page.adminPWD, 'Billgate@90')
                .click(page.adminlogin)
                .click(page.adminfreelearning)
                .click(page.adminaddoffer)
                .wait(2000)
                .typeText(page.adminprodid, '9781788996662')
                .click(page.admincreate)
                .wait(6000)
        });
        

        dataset.forEach(data => {
            test(`FreeLearning Page  -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               //.expect(page.Recomtitle).ok()
               .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 2000
               }); 
            });
        });
       test(`Freelearning Page - Logged Out`, async t => {
        await t
           .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 2000
           }); 
       });
