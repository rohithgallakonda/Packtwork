import { t } from 'testcafe';
import {Selector} from 'testcafe';
import page from './page-model';
var dataArray = require ('./accountdata.json');
var password="Packtpub@123";


fixture `Product Page - Start Trail /Sign In CTA`
.meta({type: "smoke"})
    .page `https://staging-mg.packtpub.com/free-ebook/serverless-design-patterns-and-best-practices/9781788620642`
    
    test('register for free-ebook', async t => {
        var  randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";
      
          await t
          .typeText(page.FirstnameProductpage, "Test")
          .typeText(page.LastnameProductpage,"Test")
          .typeText(page.emailProductpage, randEmail )
          .typeText(page.passwordProductpage,password)
          .wait(5000)
          .click(page.registernowProductpage)
          .wait(10000)
          //cant do the following line until recaptcha removed
          .expect(page.AccessebooknowProductpage.visible).eql(true)
        //Can't go further until recapcha removed
    }); 

    
         test('product page - Sign in', async t => {
          var  randEmail=(Math.round(Math.random()*100000)).toString(36)+"@email.com";

          await t
         .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
         .click(page.signinProductpage).expect(page.loginproductpage.visible).eql(true)

        });

         test('product page - Access Now', async t => {
          await t
         .navigateTo(`https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`)
         .click(page.AccessnowProductpage).expect(page.Accountdetails.visible).eql(true)  
         //await t.expect(await Selector('a').getAttribute('href')).contains('/checkout/subscription/packt-subscription-monthly-launch-offer?freeTrial')

        });
