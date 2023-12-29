import { t } from 'testcafe';
import page from './page-model';
const dataset = require ('./accountdata.json');

fixture `Staging - NewReader`
    .meta({type: "smoke"})
    .page `https://subscription-staging.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`NewReader - Functional-More info -  '${data.email}'`, async t => {
     await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)       
        .navigateTo(`https://subscription-staging.packtpub.com/book/data/9781789955750/1`)
        .wait(10000)
        .click(page.NewMoreInfo)
        .wait(2000)
        .expect(page.Aboutthisbook.visible).ok();
        //.expect(Selector(page.Aboutthisbook).withText('About this Book').exists).ok()
      });  
    });

    dataset.forEach(data => {
     test(`New Reader page-Functional-TOC page '${data.email}'`, async t => {
      await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .navigateTo(`https://subscription-staging.packtpub.com/book/data/9781789955750/1`)
        .click(page.TOCclick)
        .wait(3000)
        .expect(page.TOCpage.visible).ok();
        //.expect(Selector(page.TOCpage).withText('Using Python for machine learning').exists).ok()
    });
  }); 
      
   /* dataset.forEach(data => {
      test(`New Reader page-Functional-Bookmark '${data.email}'`, async t => {
      await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .maximizeWindow()
        .navigateTo(`https://subscription-staging.packtpub.com/book/data/9781789955750/1`)
        //.click(page.Sidebar)
        .wait(3000)
        .click(page.Bookmarkicon) // not able to findout exact selector for bookmark icon hence test get's stuck
        .wait(5000)
        .click(page.LHSbookmark)
        .wait(3000)
        .click(page.Bookmarkbtn)
        .expect(page.Bookmarkprd.visible).ok();
        //.expect(Selector(page.Bookmarkprd).withText('Giving Computers the Ability to Learn from Data').exists).ok()
    });
  }); */

    dataset.forEach(data => {
      test(`New Reader page-Functional-Search '${data.email}'`, async t => {
      await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .navigateTo(`https://subscription-staging.packtpub.com/book/data/9781789955750/1`)
        .click(page.LHSSearch)
        .wait(2000)
        .typeText(page.Searchtitle, 'programming')
        .click(page.Searchicon)
        .wait(10000)
        .expect(page.Searchresult.visible).ok();
        //.expect(Selector(page.Searchresult).withText('programming').exists).ok()
    });
  }); 

      dataset.forEach(data => {
      test(`New Reader page-Functional-Playlist '${data.email}'`, async t => {
        var Playlistname=(Math.round(Math.random()*100000)).toString(36);
      await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .navigateTo(`https://subscription-staging.packtpub.com/book/data/9781789955750/1`)
        .click(page.LHSplaylist)
        .wait(2000)
        .click(page.Createplaylistnew)
        .wait(3000)
        //.typeText(page.Playlistname, 'Newpackt')
        .typeText(page.Playlistname, Playlistname)
        .click(page.Playlistbtn)
        .expect(page.Playlistmsg.visible).ok();
        //.expect(Selector(page.Playlistmsg).withText('Using Python for machine learning').exists).ok()
    });
  });

    dataset.forEach(data => {
      test(`New Reader page-Functional-Buy product '${data.email}'`, async t => {
      await t
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .wait(3000)
        .navigateTo(`https://subscription-staging.packtpub.com/book/data/9781789955750/1`)
        .click(page.Buyprod)
        .wait(3000)
       .expect(page.Shopcart.visible).ok();
       //.expect(Selector(page.Shopcart).withText('Shopping Cart').exists).ok()
  });
});