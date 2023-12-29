import {Selector} from 'testcafe';
import page from './page-model';
 
const dataset = require ('./accountdata.json');
 
fixture `Staging-Freelearning - Logged in`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`

   //test to add free learning book to admin portal
   test(`Add Free Learning Book in admin portal`, async t => {
    await t    
        .navigateTo(`https://admin-staging.packtpub.com/`)
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

    
    test('register for free-ebook', async t => {
      var randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";
      var password = "Pword123";
    
        await t
        .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
        .typeText(page.firstNameTextbox, "Rahul")
        .typeText(page.lastNameTextBox,"Last")
        .typeText(page.emailTextBox, randEmail )
        .typeText(page.passwordTextBox,password)
        .click(page.registerNowButton)
        //wait for page to refresh to the access now button then click it
        .wait(20000)
       .click(page.successBtn)
       //now has to click access ebook now again on next page
       .wait(10000)
       .click(page.accessEbookAgain)
   
   

//Recaptacha stops the claim button working so the rest can only be done after 
//recaptcha is switched off
/*
     //we automatically get taken to reader
     //check text in button in contents page is "start"
     //This ensures the book is unlocked
     .expect(page.start.textContent).contains('Start')
     .wait(5000) 
*/     
     //go to subscriptions owned page and make sure book exists
     .navigateTo(`https://subscription-staging.packtpub.com/owned`)
     .wait(5000)
     .expect(Selector(page.ownedTitleName).withText('Learn Python').exists).ok()
      
     
     //go to account portal and make sure book exists
     .navigateTo(`https://account-qa.packtpub.com/account/products`)
     .wait(5000)
     .expect(Selector(page.ownedTitleNameAccPortal).withText('Learn Python').exists).ok()
     
    
    });