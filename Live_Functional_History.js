import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - HistoryPage`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`History - open '${data.email}'`, async t => {
     await t
        
        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        //.click(page.Recent)--> not being fetched via automation(recent title doesn't even appear)
        .navigateTo('https://subscription.packtpub.com/history')
        .click(page.ReadHistoryTitle)

         });     
     });
/*
     dataset.forEach(data => {
        test(`History - reader navigation '${data.email}'`, async t => {
        await t
           
            .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        //.click(page.Recent)--> not being fetched via automation(recent title doesn't even appear)
        .navigateTo('https://subscription.packtpub.com/history')
        .click(page.ViewTwelve)
        .click(page.ViewTwentyfour)
        .click(page.ViewFortyeight)
   
            });     
        });*/
