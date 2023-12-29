import { t } from 'testcafe';
import {Selector} from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');
//this test is designed just to check whether the top nav of new homepage is working fine
fixture `Staging-Home Page TopNav`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    /*dataset.forEach(data => {
     test(`HomePage - LoggedInSearchfunction -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .wait(6000)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        //.expect(page.jumpbackin.visible).eql(true)
        //.expect(page.recommendedblock.visible).eql(true)
        .click(page.SearchButton)
         //.click(page.viewbeta)
        .wait(5000)
            });     
         });

    dataset.forEach(data => {
     test(`Home Page - LoggedInBrowseCategory -  '${data.email}'`, async t => {
        await t
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .wait(5000)
       .click (page.BrowseCategory)
       .click(page.selectCategory)
       .wait(5000)
       
 });
});

    dataset.forEach(data => {
     test(`Home Page - LoggedInRecentTab -  '${data.email}'`, async t => {
       await t
       .typeText(page.loginemail, data.email)
       .typeText(page.loginpassword, data.password)
       .click(page.loginSubmit)
       .wait(5000)
       .click (page.RecentTab)
       //expect that we are in the recent page
       .wait(5000)
      
});
}); */
   
  // click my library, then home
  //expect on correct page

  //go home-------------------------------------------------------------

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.MyLibrary)
      .wait(5000)
      .click(page.Home)
      .wait(3000)
      .expect(page.jumpbackin.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });


  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.MyLibrary)
      .wait(5000)
      .click(page.Playlist)
      .wait(3000)
      .expect(page.Playlistpage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.MyLibrary)
      .wait(5000)
      .click(page.Credits)
      .wait(3000)
      .expect(page.Creditpage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.MyLibrary)
      .wait(5000)
      .click(page.Bookmarks)
      .wait(3000)
      .expect(page.Bookmarkpage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  }); 

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.MyLibrary)
      .wait(5000)
      .click(page.Owned)
      .wait(3000)
      .expect(page.Ownedpage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  }); 

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.MyLibrary)
      .wait(5000)
      .click(page.Notes)
      .wait(3000)
      .expect(page.Notepage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  }); 

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.Recent)
      .wait(5000)
      .click(page.Viewhistory)
      .wait(3000)
      .expect(page.Viewhistorypage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.Account)
      .wait(5000)
      .click(page.Settings)
      .wait(3000)
      .expect(page.Settingpage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.Account)
      .wait(5000)
      .click(page.Help)
      .wait(3000)
      .expect(page.Helppage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });

  dataset.forEach(data => {
    test(`Home Page - My Library-  '${data.email}'`, async t => {
      await t
      .typeText(page.loginemail, data.email)
      .typeText(page.loginpassword, data.password)
      .click(page.loginSubmit)
      .wait(3000)
      .click(page.Account)
      .wait(5000)
      .click(page.Logout)
      .wait(3000)
      .expect(page.Logoutpage.visible).eql(true)
      //.expect(Selector(page.jumpbackin).withText('Jump back in').exists).ok()
      //.wait(5000)
    });
  });

  

test('Home page - LoggedOut', async t => {
  await t
  .navigateTo(`https://subscription-staging.packtpub.com`)
  //.expect(page.jumpbackin.visible).eql(false)
  .expect(page.SignInButton.visible).eql(true)
  .click (page.SignInButton)
 .wait(5000)
 
}); 
