import { takeSnapshot } from 'testcafe-blink-diff';
import page from './page-model';

fixture `Visual Regression`
    .meta({type: "visual"})
    .page `https://staging-mg.packtpub.com/product/python-machine-learning-third-edition/9781789955750`
      
       test('Product Page Test 1', async t => {
            await takeSnapshot(t)
            await t
            .wait (2000);
       });

       test('Product Page Test 2', async t => {
            
            await t
            .click (page.collapseCh1)
            
            await takeSnapshot(t)
            await t
            .wait (2000);
     });