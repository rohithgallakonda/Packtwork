import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - DownloadInvoice`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Invoice Download -  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/my-account')
        .wait(7000)
        .click(page.ViewBillingDetails)
        .click(page.GetInvoice)

    });
});