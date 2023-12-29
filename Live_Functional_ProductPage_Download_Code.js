import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Product Page - Code Download`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Product Page Github Download - '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
        //click Download Code

        //checks on correct download page

        //checks download works

         });     
     });

     dataset.forEach(data => {
        test(`Product Page Packt Download - '${data.email}'`, async t => {
        await t
           .typeText(page.loginemail, data.email)
           .typeText(page.loginpassword, data.password)
           .click(page.loginSubmit)
           .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
           //click Download Code
   
           //checks on correct download page
   
           //checks download works
   
            });     
        });
