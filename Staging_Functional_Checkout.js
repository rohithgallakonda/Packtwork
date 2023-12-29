import { t } from 'testcafe';
import {Selector} from 'testcafe';
import page from './page-model';
const dataset = require ('./checkoutdata.json');
const zouraframe = Selector('iframe#z_hppm_iframe');
//const zouraframe = Selector('iframe#reCAPTCHA');
const securityframe = Selector('iframe#checkoutChallengeIFrame');
const securityframe2 = Selector('iframe#cko-3ds2-iframe');
var password = "Pword123"

fixture `Staging-Checkout`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
     
    //visa tests for all sub types
    dataset.forEach(data => {
        test(`Staging - Checkout - Visa - '${data.subscription}'`, async t => {       
     //test(`Staging - Checkout - Visa - Trial`, async t => {
        var randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";    
     await t
        .navigateTo(data.checkoutLink)
        .maximizeWindow()
        .typeText(page.checkoutEmail, randEmail)
        .typeText(page.checkoutPassword, password)
        .typeText(page.checkoutName, "FirstName")
        .typeText(page.checkoutSurname, "Surname")
        .click(page.checkoutContinueOne)
        .wait(10000)
        //address section
        .click(page.EnterManually)
        .wait(1000)
        .typeText(page.checkoutAdd1, "35 Livery Street")
        .typeText(page.checkoutCity, "Birmingham")
        .click(page.country)
        .typeText(page.countryDropDown, "United States")
        .pressKey('enter')
        .click(page.checkoutState)
        .typeText(page.checkoutStateDropDown, "Texas")
        .pressKey('enter')
        .typeText(page.checkoutPostcode, "B3 2PB")
        //have to click to address line 1 so that text doesnt cover the continue button
        .click(page.checkoutAdd1)
        .click(page.checkoutContinueTwo)
        .wait(10000)
         //card details section
         .click(page.checkoutSelectCard)
        .wait(5000)
        //have to scroll to the bottom of the page or it wont find the card number field etc
        //scrolls to the paypal button
        .hover(page.checkoutSelectPaypal)
        //moves to zoura iframe to put in the card details
        .switchToIframe(zouraframe)
        .click(page.cardNumber)
        .typeText(page.cardNumber, "4242424242424242")
        .click(page.expireMonth)
        .click(page.monthDropDown)
        .click(page.expireYear)
        .click(page.yearDropDown)
        .typeText(page.cvv, "100")
        .click(page.startSub)
        .wait(10000)
        .switchToMainWindow()
        //need a wait to jump to homepage, or the expect will fail
        .wait(10000)
        //checks the account details pae to make sure the plan was added
        //the following checks the generic title of the subscription block
        .navigateTo('https://subscription-staging.packtpub.com/my-account')
        //needs a wait otherwise expect will fail
        .wait(10000)    
        .expect(Selector(page.subExists).withText('Plan Details').exists).ok()    
        //there is no 3ds popup here as we used a US address
        //the 3ds popup is cross-origin so we physically cant access it for security reasons
        //no way around this, we cant actually test the 3ds popup. Just in case, i'm keeping the code here
        /*
        .switchToMainWindow()
        .wait(5000)
        .switchToIframe(securityframe)
       .wait(2000)
        .switchToIframe(securityframe2)
        .wait(2000)
        .click(page.securityCheck)
        .typeText(page.securityCheck, "Checkout1!")
        .click(page.securityContinue)
        .switchToMainWindow()
        .wait(10000)
        */

     });     
    });

//mastercard tests for all sub types
dataset.forEach(data => {
    test(`Staging - Checkout - Mastercard - '${data.subscription}'`, async t => {       
 //test(`Staging - Checkout - Mastercard - Trial`, async t => {
    var randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";    
 await t
    .navigateTo(data.checkoutLink)
    .maximizeWindow()
    .typeText(page.checkoutEmail, randEmail)
    .typeText(page.checkoutPassword, password)
    .typeText(page.checkoutName, "FirstName")
    .typeText(page.checkoutSurname, "Surname")
    .click(page.checkoutContinueOne)
    .wait(10000)
    //address section
    .click(page.manually)
    .wait(1000)
    .typeText(page.checkoutAdd1, "35 Livery Street")
    .typeText(page.checkoutCity, "Birmingham")
    .click(page.country)
    .typeText(page.countryDropDown, "United States")
    .pressKey('enter')
    .click(page.checkoutState)
    .typeText(page.checkoutStateDropDown, "Texas")
    .pressKey('enter')
    .typeText(page.checkoutPostcode, "B3 2PB")
    //have to click to address line 1 so that text doesnt cover the continue button
    .click(page.checkoutAdd1)
    .click(page.checkoutContinueTwo)
    .wait(10000)
     //card details section
     .click(page.checkoutSelectCard)
    .wait(5000)
    //have to scroll to the bottom of the page or it wont find the card number field etc
    //scrolls to the paypal button
    .hover(page.checkoutSelectPaypal)
    //moves to zoura iframe to put in the card details
    .switchToIframe(zouraframe)
    .click(page.cardNumber)
    .typeText(page.cardNumber, "5436031030606378")
    .click(page.expireMonth)
    .click(page.monthDropDown)
    .click(page.expireYear)
    .click(page.yearDropDown)
    .typeText(page.cvv, "257")
    .click(page.startSub)
    .wait(10000)
    .switchToMainWindow()
    //need a wait to jump to homepage, or the expect will fail
    .wait(10000)
        //checks the account details pae to make sure the plan was added
    //the following checks the generic title of the subscription block
    .navigateTo('https://subscription-staging.packtpub.com/my-account')
    //needs a wait otherwise expect will fail
    .wait(10000)    
    .expect(Selector(page.subExists).withText('Plan Details').exists).ok()    
    //there is no 3ds popup here as we used a US address
    //the 3ds popup is cross-origin so we physically cant access it for security reasons
    //no way around this, we cant actually test the 3ds popup. Just in case, i'm keeping the code here
    /*
    .switchToMainWindow()
    .wait(5000)
    .switchToIframe(securityframe)
   .wait(2000)
    .switchToIframe(securityframe2)
    .wait(2000)
    .click(page.securityCheck)
    .typeText(page.securityCheck, "Checkout1!")
    .click(page.securityContinue)
    .switchToMainWindow()
    .wait(10000)
    */
 });     
});
    