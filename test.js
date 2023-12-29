import { t } from 'testcafe';
import page from './page-model';

fixture `Load Product Page`
    .meta({type: "smoke"})
    .page `https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`
      
       test('start free trial', async t => {
            await t
            .click (page.startFreeTrial)
            .wait (5000);
       });

       test('click the bur print', async t => {
        await t
        .click (page.buyPrint)
        .wait (5000);
       });

       test('click the braedcrumb', async t => {
            await t
            .click (page.breadcrumbHome)
            .wait (5000);
        //.click('blah');
       });
       