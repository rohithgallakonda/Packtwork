import { t } from 'testcafe';
import page from './page-model';
var dataArray = require ('./accountdata.json');
var password="Packtpub@123";


fixture `Staging-Free Ebook Page - logged in`
.meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/register`
      
       test('Create account and log in', async t => {
        //creates account on main login page 
        var  randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";
        
            await t
                      .typeText(page.firstName, "Test")
                      .typeText(page.lastName, "Test")
                      .typeText(page.email, randEmail)
                      .typeText(page.password1, password)
                      .click(page.password2)
                      .typeText(page.password2, password)
                      .click(page.noThanks)
                      .click(page.createAccount)

            
           // Need recaptcha removing to continue with these
           /*
               .navigateTo(`https://staging-mg.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`)
            
              //click the claim button
              .click(page.claimNow)
            */

              
/*
NEED RECAPTCHA TURNING OFF TO RUN THE REST
TEST IS NOT MEANINGFUL WITHOUT THE REST          

     //we automatically get taken to reader
     //check text in button in contents page is "start"
     //This ensures the book is unlocked
     .expect(page.start.textContent).contains('Start')
     .wait(5000) 
     
     //go to subscriptions owned page and make sure book exists
     .navigateTo(`https://subscription-staging.packtpub.com/owned`)
     .expect(page.ownedTitleName.visible).eql(true)
     .wait(5000)   
     
     //go to account portal and make sure book exists
     .navigateTo(`https://account-qa.packtpub.com/account/products`)
     .expect(page.OpenInReader.visible).eql(true)
     .wait(5000)

*/              
       });

       
       
       