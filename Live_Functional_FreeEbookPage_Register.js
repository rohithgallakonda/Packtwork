import { t } from 'testcafe';
import page from './Live_page-model';
var dataArray = require ('./Live_accountdata.json');
var password="Packtpub@123";


fixture `Free Ebook Page - register`
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
            //cant do this bit until recaptcha removed
            //.expect(page.successBtn.visible).eql(true)
           
           //click the claim button

           //check messsage on screen to confirm successful

          //go to subscriptions owned page and make sure book exists
          .navigateTo(`https://subscription.packtpub.com/owned`)
     
          //go to account portal and make sure book exists
          .navigateTo(`https://account.packtpub.com/account/products`)

       });

       test('logged in user should not get registered', async t => {
        await t
        .typeText(page.FirstNameTextBoxFreeEbook, "Rahul")
        .typeText(page.LastNameTextBoxFreeEbook,"Last")
        .typeText(page.emailTextBoxFreeEbook, dataArray[3].email)
        .typeText(page.passowrdTextBoxFreeEbook, dataArray[3].password)
        .click(page.registerNowButtonFreeEbook)
        //cant do this until recaptcha removed
        //.expect(page.errorMessageFreeEbook.textContent).contains('This email address is already registered.').wait(5000)

       });

      

       
       