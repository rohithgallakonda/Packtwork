import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Subs Accounts`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Accounts_Update Details-  '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .navigateTo('https://subscription.packtpub.com/my-account')
        .click(page.UpdateDetails)
        .click(page.FirstNaam)
        .typeText(page.FirstNaam,"Baburao")
        .click(page.Submit)
    });
});

dataset.forEach(data => {
    test(`Accounts_Manage Email Preferences -  '${data.email}'`, async t => {
       await t
          .typeText(page.loginemail, data.email)
          .typeText(page.loginpassword, data.password)
          .click(page.loginSubmit)
          .navigateTo('https://subscription.packtpub.com/my-account')
          .click(page.ManageEmailPreferences)
          .click(page.SubsUpdates)
          await t.expect(page.AlertsAndOffers).visible;
          await t.expect(page.DealofDay).visible;
          await t.expect(page.SubsUpdates).visible;
          await t.expect(page.TechNews).visible;
          await t.expect(page.Feedback).visible;
        
    });
});

dataset.forEach(data => {
    test(`Accounts_Billing-details -  '${data.email}'`, async t => {
       await t
          .typeText(page.loginemail, data.email)
          .typeText(page.loginpassword, data.password)
          .click(page.loginSubmit)
          .navigateTo('https://subscription.packtpub.com/my-account')
          .navigateTo('https://subscription.packtpub.com/my-account/billing-details')
          .wait(3000)
        
    });
});

dataset.forEach(data => {
    test(`Accounts_Downloading Owned Products -  '${data.email}'`, async t => {
       await t
          .typeText(page.loginemail, data.email)
          .typeText(page.loginpassword, data.password)
          .click(page.loginSubmit)
          .navigateTo('https://subscription.packtpub.com/owned')
          .click(page.OwnedTitleOpen)
          .wait(3000)
          .click(page.DownloadOptions)
         // .click(page.DownloadEPUB)
        
    });
});

dataset.forEach(data => {
    test(`Accounts_Change Address -  '${data.email}'`, async t => {
       await t
          .typeText(page.loginemail, data.email)
          .typeText(page.loginpassword, data.password)
          .click(page.loginSubmit)
          .navigateTo('https://subscription.packtpub.com/my-account')
          .click(page.UpdateDetails)
          .typeText(page.BillingStreet1, "35 Livery Street")
          .typeText(page.BillingStreet2, "ABCD test")
          .click(page.Submit)
        
    });
});