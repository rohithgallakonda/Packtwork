import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Register Page`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login` 
      
   
   test('Upgrade - Trial to Monthly', async t => {
      await t
      .typeText(page.loginemail, "trivedibhaiya@test.com")
      .typeText(page.loginpassword, "Test@123")
      .click(page.loginSubmit)
      .wait(3000)
      .navigateTo('https://staging-mg.packtpub.com/checkout/subscription/packt-subscription-monthly-launch-offer?freeTrial')
      .click(page.EnterAddressManually)
      .typeText(page.Address1, "b3, Livery street")
      .click(page.countryselect)
      .click(page.countrysearch)
      .typeText(page.countrysearch, "United Kingdom")
      .pressKey('enter')
      .click(page.SelectState)
      .click(page.StateSearch)
      .typeText(page.StateSearch, "London")
      .pressKey('enter')
      .typeText(page.EnterCity, "london")
      .typeText(page.EnterPIN, "400706")
      .click(page.Continue)
      .click(page.CreditCard)
      .typeText(page.CreditCard, "4111111111111111")
      .click(page.Expirationmonth)
      .click(page.ExpirationMonthh)
      .click(page.ExpiryYr)
      .click(page.ExpiryYear)
      .typeText(page.EnterCVV, "100")
      .click(page.StartTrialButton)
      //.navigateTo('https://staging-mg.packtpub.com/checkout/subscription/packt-subscription-monthly-launch-offer')
      .wait(5000)

});
