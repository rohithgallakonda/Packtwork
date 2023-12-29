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
        .wait(3000)
        .navigateTo('https://subscription.packtpub.com/my-account')
        .wait(3000)
        .click(page.downloadinvoice)
        .wait(3000)

    });
});