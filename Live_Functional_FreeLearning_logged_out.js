import page from './Live_page-model';
 
const dataset = require ('./Live_accountdata.json');

var password="Packtpub@123";
 
fixture `Freelearning - Logged Out`
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
      test(`Claim the book as logged out user`, async t => {
        var  randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";

        await t
       .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
       .typeText(page.FirstNameTextBoxFreeEbook, "Test")
        .typeText(page.LastNameTextBoxFreeEbook,"Test")
        .typeText(page.emailTextBoxFreeEbook, randEmail )
        .typeText(page.passowrdTextBoxFreeEbook,password)
        .click(page.registerNowButton)
        .expect(page.accessEbookNow.visible).eql(true)
        .click(page.accessEbokNow)
        
     //go to subscriptions owned page and make sure book exists
     .navigateTo(`https://subscription-staging.packtpub.com/owned`)
     
     //go to account portal and make sure book exists
     .navigateTo(`https://account-qa.packtpub.com/account/products`)
 });
