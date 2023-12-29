import { t } from 'testcafe';
import {Selector} from 'testcafe';
import page from './page-model';
 
const dataset = require ('./accountdata.json');
 
fixture `Staging-Register Page`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/register` 
     
    
 
   dataset.forEach(data => {
     test(`Register Page -  '${data.email}'`, async t => {
     
     await t
 
        .click(page.acceptcookie)
        .typeText(page.firstName, "test")
        .typeText(page.lastName, "testabc")
        .typeText(page.email,data.email)
        .typeText(page.password1,data.password)
        .click(page.firstName)
        .typeText(page.password2,data.password)
        .click(page.noThanks)
        .click(page.createAccount)
        .wait(5000)
        //.expect(page.alert.visible).eql(true)
        //recaptcha still exists on register page, need it removed then uncomment the expect
        //.expect(Selector(page.alert).withText('This email address is already registered.').exists).ok()
        
   });
});