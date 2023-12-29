import {Selector} from 'testcafe';

class Page {
    constructor () {
        //product page
        this.startFreeTrial = Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > ul.price-list > li:nth-child(1) > span.price-list__link > a');
        this.tocCh1Sec1 = Selector('#collapse0 > ul > li:nth-child(1) > a');
        this.chapter2 = Selector('#accordion-toc > li:nth-child(2) > a:nth-child(1)');
        this.tocCh2Sec1 = Selector('#collapse1 > ul > li:nth-child(1) > a');
        this.buyPrint = Selector ('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > ul.price-list > li:nth-child(2) > span.price-list__link > a');
        this.breadcrumbHome = Selector ('#app > main > header > div > div.product__info > div.breadcrumbs > span:nth-child(1) > a');
        this.collapseCh1 = Selector ('#accordion-toc > li:nth-child(1) > a');
        this.tocCh1accordion= Selector('#accordion-toc > li:nth-child(1) > a');
        this.Ch1section4= Selector('#collapse0 > ul > li:nth-child(4) > a');
        this.closebutton= Selector('body > section.product__author.container.upsell > div > div > div > div.upsell-card__info > button');
        this.scrollvalidate= Selector('#_idParaDest-29')
        this.FirstnameProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div.col.left > input')
        this.LastnameProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div.col.right > input')
        this.emailProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(3) > input')
        this.passwordProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(4) > input')
        this.registernowProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button')
        this.AccessebooknowProductpage=Selector('#freeLearningClaimButton')
        this.signinProductpage=Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > div.product-info__buttons > a.button.button--outline.button--white')
        this.loginproductpage=Selector('body > app-root > div > ng-component > div > div > ng-component > div > p.text-center.mb-4')
        this.AccessnowProductpage=Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > div.product-info__buttons > a.button.button--main')
        this.Accountdetails=Selector('#accDetails')

        //new account page
        this.downloadinvoice=Selector('#my-account-page > section > div > section:nth-child(2) > div.my-subscriptions-page-container.mt-5 > section > div.invoice-history.flex-wrap.d-flex > div > div > table > tr:nth-child(2) > td.download-btn > span')

        //login page
        this.loginemail = Selector ('#login-input-email');
        this.loginpassword = Selector ('#login-input-password');
        this.loginSubmit = Selector ('#login-form > form > button:nth-child(6)');

        //register page
        this.firstName= Selector('#create-account-first-name');
        this.lastName= Selector('#create-account-last-name');
        this.email= Selector('#create-account-email');
        this.password1= Selector('#create-account-password')
        this.password2= Selector('#create-account-confirm-password')
        this.noThanks= Selector('#create-account-mailing-opt-out')
        this.createAccount= Selector('#create-account-form > button:nth-child(8)')

        //free learning
        this.freelearning = Selector ('#navbarContent-desk > div > div:nth-child(2) > a');
        this.firstNameTextbox=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div:nth-child(1) > input');
        this.lastNameTextBox=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div:nth-child(2) > input');
        this.emailTextBox=Selector('#freeLearningRegistrationForm > div:nth-child(3) > input');
        this.passowrdTextBox=Selector('#freeLearningRegistrationForm > div:nth-child(4) > input');
        this.registerNowButton=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button');
       // this.successBtn=Selector('#freeLearningClaimButton');
        this.accessEbookNow=Selector('#freeLearningClaimButton');
        
        //free e-book
        this.FirstNameTextBoxFreeEbook= Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div:nth-child(1) > input');
        this.LastNameTextBoxFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div.col.text-right > input');
        this.emailTextBoxFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(3) > input');
        this.passowrdTextBoxFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(4) > input');
        this.registerNowButtonFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button');
        this.errorMessageFreeEbook=Selector('#freeLearningRegistrationErrorMessage')
        this.claimNow=Selector('#freeLearningClaimButton')
        this.anytitle=Selector('#app > main > section > div > div > div:nth-child(1) > div > a > div')

        //home page
        this.mylibrary2=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(2) > span')
        this.MyLibrary=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > span')
        this.goToplaylist=Selector('#packt-navbar-nav > div > div.nav-item.show.dropdown > div > a:nth-child(2) > span')
        this.account=Selector('#nav-account > span > span')
        this.ViewBillingDetails=('#book-wrapper > div > div:nth-child(2) > div.panel-body > p:nth-child(4) > a')
        this.GetInvoice=Selector('#book-wrapper > div > small > table > tbody > tr > th > a')

        //reader
        this.buyEbook= Selector ('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(1) > button');
        this.start= Selector ('#book-wrapper > div > div > div > div.button-group.text-right.ng-scope > a')
        this.beta= Selector ('body > div.page > div.ng-scope > div > div.container.book-page > div > div.visible-md.visible-lg > div > div.beta-reader-upsell__cta')
        this.nextSection= Selector('#reader-content > div:nth-child(4) > a.btn.btn-primary.pull-right.btn-lg.btn-block')
        this.SelectTitle=Selector('#root > div > div.page-content > div.page-right > div.products-wrapper > div:nth-child(1)')
        this.AddtoPlaylist=Selector('#root > div > div.page-content > div.page-right > div.products-wrapper > div:nth-child(1) > div > div.addtoplaylist-popup > button')
        this.addplaylistbutton=Selector('#popover-basic > div.popover-body > ul > li')
        this.CreatePlaylist=Selector('body > div.fade.playlist-modal.packt-modal.modal.show > div > div > div > div.modal-body > div.playlist-list > div > div:nth-child(1) > div:nth-child(1) > a')
        this.EnterPlaylistName=Selector('#formBasicTitle')
        this.CreatePlaylistbutton=Selector('body > div.fade.playlist-modal.packt-modal.modal.show > div > div > div > div.modal-footer > button.btn-confirm.btn.btn-primary')
        this.AddBookmark=Selector('#content > div > div:nth-child(2) > div > div.col-lg-1.col-md-1.col-sm-2.col-2 > div > svg')
        this.TrialBanner=Selector('#content > div > div.fade.upsell-banner.alert.alert-warning.show')
        this.AddGuestBookmark=Selector('#content > div > div:nth-child(3) > div > div.col-lg-1.col-md-1.col-sm-2.col-2 > div > svg')
        this.AddBookmark2=Selector('#content > div > div:nth-child(7) > div > div.col-lg-1.col-md-1.col-sm-2.col-2 > div > svg')
        this.AddBookmark3=Selector('#content > div > div:nth-child(9) > div > div.col-lg-1.col-md-1.col-sm-2.col-2 > div > svg')
        this.BookmarksRHSopen=Selector('#nb1')
        this.BookmarksRHSmenu=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-panel.show-buttons > div.d-block > div.col.Bookmark-notes-container > div:nth-child(2) > div > div:nth-child(2) > button')
        this.RelatedTile=Selector('#book-container > div.related-title-container.container > div > div.book-title.ml-3')
        this.HideRelatedTitles=Selector('#book-container > div.lhs-book-title > div.buttons.related-btn-group > button')
        this.GoToRelatedTitle=Selector('#book-container > div.related-title-container.container > div > div:nth-child(3) > div.col-7 > div > span > a')
        this.BrowseLibrary=Selector('#packt-navbar > div:nth-child(2) > a')
        this.SearchTitle=Selector('#packt-navbar > form > input')
        this.EnterManually=Selector('#formStep2google > div > div > div.text-right > a')
        //admin portal
        this.adminUserID = Selector ('#mat-input-0')
        this.adminPWD = Selector ('#mat-input-1')
        this.adminlogin = Selector ('body > app-root > ng-component > div > ng-component > mat-card > mat-card-content > form > div > button')
        this.adminfreelearning = Selector ('body > app-root > admn-main-container > div > div > div:nth-child(1) > admn-side-nav > mat-nav-list > a:nth-child(6) > div')
        this.adminaddoffer = Selector ('body > app-root > admn-main-container > div > div > div:nth-child(2) > admn-free-learning-ms-container > admn-free-learning-offers-list > div > button > span')
        this.adminprodid = Selector ('#mat-input-4')
        this.admincreate = Selector ('#mat-dialog-0 > ng-component > div.mat-dialog-actions > button.mat-button.mat-primary > span')
          
        //new homepage
        this.jumpbackin=Selector('#root > main > section.row.jumpBackIn-section > div > h2')
        this.recommendedblock=Selector('#root > main > section.row.recommendTitles-section > div > h2')
        this.selectjbititle=Selector('#root > main > section.row.jumpBackIn-section > div > div > div > div > div.slick-slide.slick-active.slick-current > div > div > div > div > a')
        this.viewbeta=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.visible-md.visible-lg > div > div.beta-reader-upsell__cta > a')
        this.selecttrendingtitle=Selector('#root > main > div.product-strip > div.row > div.col-md-6.trending-titles > div > div:nth-child(1) > a.title')

        //homepage footer links
        this.webdevelopment= Selector('#root > footer > div.container > div > div.col-sm-12.col-md-12.col-xs-12.col-lg-8 > div > div.col-8.col-sm-12.col-md-8.col-xs-12.col-lg-8 > div > div:nth-child(1) > a')
        this.usefulLinks= Selector('#root > footer > div.container > div > div.col-sm-12.col-md-12.col-xs-12.col-lg-8 > div > div.col-4.col-sm-12.col-md-4.col-xs-12.col-lg-4 > span')
        this.appStoreCTA=Selector('#root > footer > div.container > div > div.col-4.email-subscribe-container.col.d-none.d-lg-block > ul > li:nth-child(4) > div > a:nth-child(1)')
        this.PLayStoreCTA=Selector('#root > footer > div.container > div > div.col-4.email-subscribe-container.col.d-none.d-lg-block > ul > li:nth-child(4) > div > a:nth-child(2)')

        //homepage topNav
        this.SearchButton=Selector('#primary-navigation > div > div.navigation__left > form > button')
        this.BrowseCategory=Selector('#primary-navigation > div > div.navigation__left > ul > li > span')
        this.selectCategory=Selector('#primary-navigation > div > div.navigation__left > ul > li')
        this.RecentTab=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(2) > span')
        this.SignInButton=Selector('#primary-navigation > div > div.navigation__right > ul > li > a')

        //Expert Reading Lists
        this.ERLHome=Selector('#root > main > section.product-strip > div.row > div.col-md-6.new-releases > h2')
        this.ERL=Selector('#root > div > main > section.full-width-container.expert-network.home-page > div.col-12.p-0 > div > div.ctr-button-holder > a')
        this.ERLDetailed=Selector('#root > main > section > div.row > div.col-md-7.col-lg-8.col-xl-9 > div > div.row > div:nth-child(1) > div > div.media-body > a')

        //Accounts
        this.UpdateDetails=Selector('#book-wrapper > div > div:nth-child(2) > div.panel-body > p:nth-child(1) > a')
        this.FirstNaam=Selector('#first-name')
        this.Submit=Selector('#book-wrapper > div > div > form > div > div.panel-footer.clearfix > button')
        this.ManageEmailPreferences=('#book-wrapper > div > div:nth-child(2) > div.panel-body > p:nth-child(2) > a')
        this.AlertsAndOffers=Selector('#book-wrapper > div > div > div.panel-body > form > div:nth-child(1) > div > div > label > strong')
        this.DealofDay=Selector('#book-wrapper > div > div > div.panel-body > form > div:nth-child(2) > div > div > label > strong')
        this.SubsUpdates=Selector('#book-wrapper > div > div > div.panel-body > form > div:nth-child(3) > div > div > label > strong')
        this.TechNews=Selector('#book-wrapper > div > div > div.panel-body > form > div:nth-child(4) > div > div > label > strong')
        this.Feedback=Selector('#book-wrapper > div > div > div.panel-body > form > div:nth-child(5) > div > div > label > strong')
       // this.ViewBillingDetails=Selector('#book-wrapper > div > div:nth-child(2) > div.panel-body > p:nth-child(4) > a')
        this.ReadOwnedProduct=Selector('body > div.page > div.ng-scope > div.container.mb10.ng-scope > product-listing > ul > li:nth-child(1) > div > product > div > div.product__buttons > a')
        this.DownloadOptions=Selector('#d4 > div > svg')
        this.DownloadEPUB=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > div > div > a:nth-child(2)')
        this.BillingStreet1=Selector('#billing-street1')
        this.BillingStreet2=Selector('#billing-street2')
        this.ReadNow=Selector('body > div.page > div.ng-scope > div.container.mb10.ng-scope > product-listing > ul > li:nth-child(1) > div > product > div > div.product__buttons > a')
        this.Twelve=Selector('body > div.page > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a.pagination__limit-link.ml10.mr10.active')
        this.Twentyfour=Selector('body > div.page > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a:nth-child(2)')
        this.FortyEight=Selector('body > div.page > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a:nth-child(3)')
        this.SearchOwned=Selector('#app > div > div.owned-titles-page > div > div.col.top-panel > div > div.col-sm-12.col-md-8.col-lg-5.col-xs-5 > div > div.col-10.input-box > input')
        this.Search=Selector('#app > div > div.owned-titles-page > div > div.col.top-panel > div > div.col-sm-12.col-md-8.col-lg-5.col-xs-5 > div > div.col-2.img-container.d-flex.justify-content-end.p-0 > img')
        this.MyLibrary1=Selector('#library-dropdown')
        this.MyAccount=Selector('#packt-navbar > div.nav-row.navbar-nav > a.user-account.nav-link')
        this.Signout=Selector('#packt-navbar > div.nav-row.navbar-nav > a.style-1.d-none.d-lg-inline.nav-link')
        this.ImageText=Selector('#book-container > div.lhs-book-title > div.book-image > img')
        this.TitleName=Selector('#book-container > div.lhs-book-title > h1')
        this.UseCredits=Selector('#book-container > div.lhs-book-title > div.prices > div:nth-child(1) > button')
        this.CancelPurchase=Selector('body > div.fade.modal-overlay-container.packt-modal.modal.show > div > div > div > div.modal-footer > button.btn-cancel.btn.btn-secondary')
        this.MoreInfo=Selector('#book-container > div.lhs-book-title > div.prices > div:nth-child(2) > button')
        this.AboutTitle=Selector('body > div.fade.packt-modal.modal.show > div > div > div > div > div.container > div:nth-child(3) > div.col-md-9 > div:nth-child(1) > h3')
        this.PrintEbook=Selector('body > div.fade.packt-modal.modal.show > div > div > div > div > div.container > div.row.pb-4.no-gutters-mobile > div.col-md-10.no-gutters-mobile > div:nth-child(4) > div > div.col-7 > span')
        this.buyEbook=Selector('body > div.fade.packt-modal.modal.show > div > div > div > div > div.container > div.row.pb-4.no-gutters-mobile > div.col-md-10.no-gutters-mobile > div:nth-child(5) > div > div.col-7 > span')
        this.collapseTOC=Selector('#root > div > div.show-sidebar > div.lhs.show-buttons > button > i')
        this.ExpandTOC=Selector('#root > div > div.hidden-sidebar > div.lhs.show-buttons > button')
        this.DayNight=Selector('#dn6')
        this.ChangeFont=Selector('#f5')
        this.LargeFont=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > div > div > div > div:nth-child(3) > button')
        this.SmallFont=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > div > div > div > div:nth-child(1) > button')
        this.LargestFont=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > div > div > div > div:nth-child(4) > button')
        this.DefaultFont=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > div > div > div > div:nth-child(2) > button')
        this.OpenTitle=Selector('#root > main > section.product-strip > div.row > div.col-md-6.new-releases > div > div:nth-child(2) > a.title')
        this.UnlockAccess=Selector('#content > div > div.upsell-box > div > div.upsell-title')
        this.GoNextSection=Selector('#content > div > div.row.d-flex.justify-content-between.mb-5.btn-navigation-chapter-container > div.col-lg-4.col-6.d-flex.flex-row-reverse > button')

        //playlist
        this.addname=('#formBasicTitle')
        this.newplaylist=('body > div.fade.playlist-modal.packt-modal.modal.show > div > div > div > div.modal-body > div.playlist-list > div > div:nth-child(1) > div:nth-child(1) > a')
        this.addtoplaylist1=('#popover-basic > div.popover-body > ul > li')
        this.playlist2playlist=('#root > main > section > div.listing-component > div > div:nth-child(2) > div > div.media-body > div > div > div.rating-parent > div:nth-child(2) > div.addtoplaylist-popup > button > i')
        this.selectplaylist=('#root > main > section > div.listing-component > div.row > div:nth-child(4) > div > div.media-body > a')
        this.Playlist1=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(2) > span')
        this.PlaylistRHS=Selector('#p3')
        this.CreatePlaylist=Selector('body > div.fade.playlist-modal.packt-modal.modal.show > div > div > div > div.modal-body > div.playlist-list > div > div:nth-child(1) > div:nth-child(1) > a')
        this.CreateButton=Selector('body > div.fade.playlist-modal.packt-modal.modal.show > div > div > div > div.modal-footer > button.btn-confirm.btn.btn-primary')
        this.Selectproduct=Selector('#root > main > section > div.listing-component > div > div > div > div.media-body > div > div > div.rating-parent > div.product-checkbox.custom-control.custom-checkbox')
        //New Search Page
        this.SearchBox= Selector('#search-input > input')
        this.Searchh=Selector('#search-input > img')
        this.RemoveSelection=Selector('#search-input > button')
        this.Filter1=Selector('#root > div > div.page-content > div.page-left > div:nth-child(2) > div.popup > div:nth-child(2)')
        this.Selection2=Selector('#root > div > div.page-content > div.page-left > div:nth-child(3) > div')
        this.Filter2=Selector('#root > div > div.page-content > div.page-left > div:nth-child(3) > div.popup > div:nth-child(4)')
        this.RemoveFilter=Selector('#root > div > div.page-content > div.page-left > div.d-flex.justify-content-between.align-items-center.mb-4 > button')
        this.Toggle=Selector('#root > div > div.page-header > div.d-flex.justify-content-between > div:nth-child(1) > div > div')
        this.Option24=Selector('#root > div > div.page-header > div.d-flex.justify-content-between > div:nth-child(1) > div > div.pop-up > div:nth-child(2)')
        this.Option48=Selector('#root > div > div.page-header > div.d-flex.justify-content-between > div:nth-child(1) > div > div.pop-up > div:nth-child(3)')
        this.ListView=Selector('#root > div > div.page-header > div.d-flex.justify-content-between > div.d-flex.align-items-center > button:nth-child(2) > div')
        this.plusbuttononcard=Selector('#root > div > div.page-content > div.page-right > div.products-wrapper > div:nth-child(1) > div > div.addtoplaylist-popup > button')
        this.SelectPlaylist=Selector('#root > main > section > div.listing-component > div.row > div:nth-child(1) > div > div.media-body > a')
        this.ManagePlaylist=Selector('#root > main > section > div.playlist-header > div > button')
        this.DeletePlaylistButton=Selector('#root > main > section > div.playlist-header.manage-options > div > button:nth-child(3)')
        this.YesDelete=Selector('#Custom-Modal > div > div > div > div.modal-footer > button.btn-delete.btn.btn-primary')

        this.TextHighlight=Selector('#argo-cd-in-practice > p:nth-child(3)')
        this.ChoosePlaylist=Selector('#root > main > section > div.listing-component > div.row > div:nth-child(1) > div > div.media-body > a > div.media-title')
        this.DeleteTitle=Selector('#root > main > section > div.playlist-header.manage-options > div > button:nth-child(4)')
        this.Confirm=Selector('#Custom-Modal > div > div > div > div.modal-footer > button.btn-delete.btn.btn-primary')
        this.SelectBook=Selector('#root > main > section > div.listing-component > div > div:nth-child(1) > div > div.media-body > a')
        this.ViewAll=Selector('#root > main > section.full-width-container.expert-network.home-page > div.col-12.p-0 > div > div.ctr-button-holder > a')
        this.CategoryFilter=Selector('#root > main > section > div.row > div.col-md-5.col-lg-4.col-xl-3.filter-section-parent > div > div.filter-cards-block > div.filter-tags-block > div:nth-child(1) > span.d-block.filter-tag')
        this.NextPage=Selector('#root > main > section > div.row > div.col-md-7.col-lg-8.col-xl-9 > ul > li:nth-child(3) > a')
        this.Recent=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(3) > span')
        this.ReadTitle=Selector('body > div.page > div.ng-scope > div.container.mb10.ng-scope > product-listing > ul > li:nth-child(2) > div > product > div > div.product__buttons > a')
        this.ViewTwelve=Selector('body > div.page > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a.pagination__limit-link.ml10.mr10.active')
        this.ViewTwentyfour=Selector('body > div.page > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a:nth-child(2)')
        this.ViewFortyeight=Selector('body > div.page > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a:nth-child(3)')
        this.ReadHistoryTitle=Selector('#app > div > div.history-titles-page > div > div:nth-child(3) > div.col-xs-12.col-sm-12.col-md-12.col-lg-8.col-xl-9 > div > div > div:nth-child(1)')
        this.OwnedTitleOpen=Selector('#app > div > div.owned-titles-page > div > div:nth-child(3) > div.col-xs-12.col-sm-12.col-md-12.col-lg-8.col-xl-9 > div > div > div:nth-child(1)')
    }

}

export default new Page();