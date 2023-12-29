import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - SignIn`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`LOgIn Page -  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://www.packtpub.com/free-learning')
        //scrolldown
        .click(page.anytitle)
        //whenever you perfrom this test you can change any title or else you can ignore
        .wait(5000)
        .click(page.accessEbookNow)
        .wait(10000)
        .navigateTo('https://subscription.packtpub.com/owned')
        .wait(5000)


        //t.wait

         });     
     });