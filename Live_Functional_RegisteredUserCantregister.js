import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Register Page`
    .meta({type: "smoke"})
    .page `https://account.packtpub.com/register` 
      
   // dataset.forEach(data => {
     /*test(`Register Page -  '${data.email}'`, async t => {
     
     await t

         .click(page.acceptcookiebutton)
        .typeText(page.firstNameregister, "test")
        .typeText(page.lastNameregister, "testabc")
        .typeText(page.emailaddress,data.email)
        .typeText(page.passwordfield,data.password)
        .typeText(page.passwordconfirm,data.password)
        .click(page.registerButton)
     
   });

*/
   test('RegisterPage', async t => {
      await t
      //.click(page.acceptcookiebutton)
      .typeText(page.firstNameregister, "testabcd")
        .typeText(page.lastNameregister, "testabc")
        .typeText(page.emailaddress,"guestuser1@gmail.com")
        .typeText(page.passwordfield,"Pword123")
        .typeText(page.passwordconfirm,"Pword123")
        .click(page.registerButton)
        .wait(20000);
});

