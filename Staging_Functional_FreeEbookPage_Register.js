import { t } from 'testcafe';
import page from './page-model';
var dataArray = require ('./accountdata.json');
var password="Packtpub@123";


fixture `Staging-Free Ebook Page - register`
.meta({type: "smoke"})
    .page `https://staging-mg.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`
      
       test('register for free-ebook', async t => {
          var  randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";
        
            await t
            .typeText(page.FirstNameTextBoxFreeEbook, "Test")
            .typeText(page.LastNameTextBoxFreeEbook,"Test")
            .typeText(page.emailTextBoxFreeEbook, randEmail )
            .typeText(page.passowrdTextBoxFreeEbook,password)
            .click(page.registerNowButtonFreeEbook)
            .wait(10000)
            .expect(Selector(page.claimEbookNow).withText('Access eBook Now').exists).ok() 
            .wait(5000)
           
           //click the claim button
           .click(page.accessEbookNow) 
           .wait(10000) 
          //go to subscriptions owned page and make sure book exists
          .navigateTo(`https://subscription-staging.packtpub.com/owned`)
     
         //check book exists

          //go to account portal and make sure book exists
          .navigateTo(`https://account-qa.packtpub.com/account/products`)

          //check book exists

       });

       test('logged in user should not get registered', async t => {
        await t
        .typeText(page.FirstNameTextBoxFreeEbook, "Rahul")
        .typeText(page.LastNameTextBoxFreeEbook,"Last")
        .typeText(page.emailTextBoxFreeEbook, dataArray[3].email)
        .typeText(page.passowrdTextBoxFreeEbook, dataArray[3].password)
        .click(page.registerNowButtonFreeEbook)
        .wait(2000)
        .expect(page.errorMessageFreeEbook.textContent).contains('This email address is already registered.')
        .wait(5000)

       });

      

       
       