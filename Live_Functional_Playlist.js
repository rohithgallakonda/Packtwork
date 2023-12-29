import { t } from 'testcafe';
import page from './Live_page-model';
const dataset = require ('./Live_accountdata.json');

fixture `Live - Playlist`
    .meta({type: "smoke"})
    .page `https://subscription.packtpub.com/login`
      
    dataset.forEach(data => {
     test(`Playlist - open '${data.email}'`, async t => {
     await t
     

        .typeText(page.loginemail, data.email)
        .typeText(page.loginpassword, data.password)
        .click(page.loginSubmit)
        .click(page.MyLibrary)
        .navigateTo('https://subscription.packtpub.com/playlists')

         });     
     });
     
     dataset.forEach(data => {
        test(`Playlist - Add '${data.email}'`, async t => {
        await t
           
           .typeText(page.loginemail, data.email)
           .typeText(page.loginpassword, data.password)
           .click(page.loginSubmit)
           .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
           .click(page.PlaylistRHS)
           .click(page.CreatePlaylist)
           .typeText(page.EnterPlaylistName, "abcxyz")//rename playlist every time it is run
           .click(page.CreateButton)
           .navigateTo('https://subscription.packtpub.com/playlists')
   
            });     
        });

        dataset.forEach(data => {
            test(`Playlist - Valid playlist names '${data.email}'`, async t => {
            await t
               
               .typeText(page.loginemail, data.email)
               .typeText(page.loginpassword, data.password)
               .click(page.loginSubmit)
               .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
               .click(page.PlaylistRHS)
               .click(page.CreatePlaylist)
               .typeText(page.EnterPlaylistName, "a")//single character
               .click(page.CreateButton)
               .navigateTo('https://subscription.packtpub.com/playlists')
               .wait(2000)
               .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
               .click(page.PlaylistRHS)
               .click(page.CreatePlaylist)
               .typeText(page.EnterPlaylistName, "abcderfqwertyuiopasdfghjklzxcvbnmklpoiuytrewqaszxdcfvgbhnjmklpoiuytrewqasdfghjklmnbvcxzaqwerfdsaqazxsd")//more than 100 character
               .click(page.CreateButton)
               .navigateTo('https://subscription.packtpub.com/playlists')
               .wait(2000)
               .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
               .click(page.PlaylistRHS)
               .click(page.CreatePlaylist)
               .typeText(page.EnterPlaylistName, "Ashish@#AutomationTest1212mictesting")//Alphanumeric and special character
               .click(page.CreateButton)
               .navigateTo('https://subscription.packtpub.com/playlists')
               .wait(2000)
               .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
               .click(page.PlaylistRHS)
               .click(page.CreatePlaylist)
               .typeText(page.EnterPlaylistName, "1")//Single numeric value
               .click(page.CreateButton)
               .navigateTo('https://subscription.packtpub.com/playlists')
               .wait(2000)
               .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
               .click(page.PlaylistRHS)
               .click(page.CreatePlaylist)
               .typeText(page.EnterPlaylistName, "@")//Single special character value
               .click(page.CreateButton)
               .navigateTo('https://subscription.packtpub.com/playlists')
               .wait(2000)
               
       
                });     
            });

            dataset.forEach(data => {
                test(`Playlist -InValid playlist names '${data.email}'`, async t => {
                await t
                   
                   .typeText(page.loginemail, data.email)
                   .typeText(page.loginpassword, data.password)
                   .click(page.loginSubmit)
                   .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
                   .click(page.PlaylistRHS)
                   .click(page.CreatePlaylist)
                   .typeText(page.EnterPlaylistName, "")//no character
                   .click(page.CreateButton)
                   .navigateTo('https://subscription.packtpub.com/playlists')
                   .wait(2000)
                   .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
                   .click(page.PlaylistRHS)
                   .click(page.CreatePlaylist)
                   .typeText(page.EnterPlaylistName, " ")//space as a character
                   .click(page.CreateButton)
                   .navigateTo('https://subscription.packtpub.com/playlists')
                   .wait(2000)
                   
                    });     
                });
                dataset.forEach(data => {
                    test(`Playlist -Delete Playlist '${data.email}'`, async t => {
                    await t
                       
                       .typeText(page.loginemail, data.email)
                       .typeText(page.loginpassword, data.password)
                       .click(page.loginSubmit)
                       .navigateTo('https://subscription.packtpub.com/playlists')
                       .wait(2000)
                       .click(page.SelectPlaylist)
                       .click(page.ManagePlaylist)
                       .click(page.DeletePlaylistButton)
                       .click(page.YesDelete)
                        });     
                    });
                    
                    test(`Playlist -Logged Out `, async t => {
                        await t
                        .navigateTo('https://subscription.packtpub.com/book/cloud_and_networking/9781803233321/1')
                        .click(page.PlaylistRHS)
                        .click(page.CreatePlaylist)
                        .typeText(page.EnterPlaylistName, "abcdef")
                        .click(page.CreateButton)
                            });
                            dataset.forEach(data => {
                                test(`Playlist -Read a title from playlist '${data.email}'`, async t => {
                                await t
                                   .maximizeWindow()
                                   .typeText(page.loginemail, data.email)
                                   .typeText(page.loginpassword, data.password)
                                   .click(page.loginSubmit)
                                   .navigateTo('https://subscription.packtpub.com/playlists')
                                   .wait(2000)
                                   .click(page.ChoosePlaylist)
                                   .doubleClick(page.SelectBook)
                                   //.click(page.SelectBook)

                                    });     
                                });

                            dataset.forEach(data => {
                                test(`Playlist -Remove a title from playlist '${data.email}'`, async t => {
                                await t
                                   .maximizeWindow()
                                   .typeText(page.loginemail, data.email)
                                   .typeText(page.loginpassword, data.password)
                                   .click(page.loginSubmit)
                                   .navigateTo('https://subscription.packtpub.com/playlists')
                                   .wait(2000)
                                   .click(page.ChoosePlaylist)
                                   .click(page.ManagePlaylist)
                                   .click(page.Selectproduct)
                                   .click(page.DeleteTitle)
                                   .click(page.Confirm)

                                    });     
                                });

                            /*
                                dataset.forEach(data => {
                                    test(`Playlist -Read a title from playlist '${data.email}'`, async t => {
                                    await t
                                       .maximizeWindow()
                                       .typeText(page.loginemail, data.email)
                                       .typeText(page.loginpassword, data.password)
                                       .click(page.loginSubmit)
                                       .navigateTo('https://subscription.packtpub.com/playlists')
                                       .wait(2000)
                                       .click(page.ChoosePlaylist)
                                       .doubleClick(page.SelectBook)
                                       //.click(page.SelectBook)
    
                                        });     
                                    });
*/

    

