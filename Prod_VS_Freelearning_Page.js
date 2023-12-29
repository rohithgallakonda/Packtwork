import { takeSnapshot } from 'testcafe-blink-diff';
import page from './Live_page-model';

const dataset = require ('./Live_accountdata.json');

fixture `Live - Visual Freelearning Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription.packtpub.com/login`
      
    //not needed for live
    /*
        //test to add free learning book to admin portal
        test(`Add Free Learning Book in admin portal`, async t => {
            await t    
                .navigateTo(`https://admin.packtpub.com/login`)
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

        */
        

        dataset.forEach(data => {
            test(`FreeLearning Page  -  '${data.email}'`, async t => {
            await t
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               //.expect(page.Recomtitle).ok()
               .navigateTo(`https://www.packtpub.com/free-learning`)
               await takeSnapshot(t, {
                   fullPage: true,
                   timeout: 2000
               }); 
            });
        });
       test(`Freelearning Page - Logged Out`, async t => {
        await t
           .navigateTo(`https://www.packtpub.com/free-learning`)
           await takeSnapshot(t, {
               fullPage: true,
               timeout: 2000
           }); 
       });
