import page from './Live_page-model';
 
const dataset = require ('./Live_accountdata.json');
 
fixture `Freelearning - Logged in`
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

    //when recaptcha is gone, we will swap to this code so we have a new user each time we run
    /*
    test('register for free-ebook', async t => {
      var  randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";
    
        await t
        .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
        .typeText(page.FirstNameTextBoxFreeEbook, "Rahul")
        .typeText(page.LastNameTextBoxFreeEbook,"Last")
        .typeText(page.emailTextBoxFreeEbook, randEmail )
        .typeText(page.passowrdTextBoxFreeEbook,password)
        .click(page.registerNowButtonFreeEbook).expect(page.successBtn.visible).eql(true)
       .click(page.successBtn)
   });
   */

    //when recaptcha is gone we will remove this code as the users will all be trying to claim the same book again
    dataset.forEach(data => {
      test(`Free Learning Logged in - '${data.email}'`, async t => {
      await t
              .typeText(page.loginemail, data.email)
              .typeText(page.loginpassword, data.password)
              .click(page.loginSubmit)
       .navigateTo(`https://staging-mg.packtpub.com/free-learning`)
       .click(page.successBtn)
     //check messsage on screen to confirm successful

     //go to subscriptions owned page and make sure book exists
     .navigateTo(`https://subscription-staging.packtpub.com/owned`)
     
     //go to account portal and make sure book exists
     .navigateTo(`https://account-qa.packtpub.com/account/products`)
 });
});