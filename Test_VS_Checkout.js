import { takeSnapshot } from 'testcafe-blink-diff';
import page from './page-model';

const dataset = require ('./accountdata.json');

fixture `Staging - Visual Checkout Page Per Acount Type`
    .meta({type: "visual"})
    .page `https://subscription-staging.packtpub.com/login`
      
            test(`Checkout Page free trail`, async t => {
            await t 
               .navigateTo(`https://staging-mg.packtpub.com/checkout/subscription/packt-subscription-monthly-launch-offer?freeTrial`)
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000

                    });
                });

                test(`Checkout Page Monthly`, async t => {
                await t
                    .navigateTo(`https://staging-mg.packtpub.com/checkout/subscription/packt-subscription-monthly-launch-offer`)
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000
                    });
                });

                test(`Checkout Page Mapt Pro`, async t => {
                await t
                    .navigateTo(`https://staging-mg.packtpub.com/checkout/subscription/mapt-pro-annual`)
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000
                });
            });

                test(`Checkout Page Monthly Dec Offer`, async t => {
                await t
                    .navigateTo(`https://staging-mg.packtpub.com/checkout/subscription/monthly-dec-offer`)
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000    
                });
            });

                test(`Checkout Page 18 Months`, async t => {
                await t
                    .navigateTo(`https://staging-mg.packtpub.com/checkout/subscription/pro-18-months`)
                    await takeSnapshot(t, {
                    fullPage: true,
                    timeout: 2000            
                });
            });