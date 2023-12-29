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
        this.freelearning=Selector('#navbarContent-desk > div > div:nth-child(2) > a')
        this.FirstnameProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div.col.left > input')
        this.LastnameProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div.col.right > input')
        this.emailProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(3) > input')
        this.passwordProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(4) > input')
        this.registernowProductpage=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button')
        this.AccessebooknowProductpage=Selector('#freeLearningClaimButton')
        this.signinProductpage=Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > div.product-info__buttons > a.button.button--outline.button--white')
        this.loginproductpage=Selector('body > app-root > div > ng-component > div > div > ng-component > div > p.text-center.mb-4')
        this.AccessnowProductpage=Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > div.product-info__buttons > a.button.button--main')
        this.Accountdetails=Selector('body > div.container.checkout > div.steps.step1.active > h5')
        //this.Hidebanner=Selector('body > section.product__author.container.upsell > div > div > div > div.upsell-card__info > button')
        
        
        //login page
        this.loginemail = Selector ('#login-input-email');
        this.loginpassword = Selector ('#login-input-password');
        this.loginSubmit = Selector ('#login-form > form > button:nth-child(6)');
        this.acceptcookie=Selector('body > div.cc-window.cc-banner.cc-type-info.cc-theme-classic.cc-bottom.cc-color-override-637850434 > div > a')

        //register page
        this.firstName= Selector('#create-account-first-name');
        this.lastName= Selector('#create-account-last-name');
        this.email= Selector('#create-account-email');
        this.password1= Selector('#create-account-password')
        this.password2= Selector('#create-account-confirm-password')
        this.noThanks= Selector('#create-account-mailing-opt-out')
        this.createAccount= Selector('#create-account-form > button:nth-child(8)')
        //this.alert1= Selector('#alertbox')
        this.alert= Selector('#subAlert1 > span')
      
        //register Page staging-mg
        this.acceptcookiebutton=Selector('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override-733698381 > div > a')
        this.firstNameregister=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div.row.mb-3 > div:nth-child(1) > div:nth-child(1) > input');
        this.lastNameregister=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div.row.mb-3 > div:nth-child(1) > div:nth-child(2) > input');
        this.emailaddress=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div.row.mb-3 > div:nth-child(1) > div:nth-child(3) > input')
        this.passwordfield=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div.row.mb-3 > div:nth-child(1) > div:nth-child(4) > input')
        this.passwordconfirm=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div.row.mb-3 > div:nth-child(1) > div:nth-child(5) > input')
        this.registerButton=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div.row.justify-content-sm-center > div > button')
    

        //free learning
        this.freelearning = Selector ('#navbarContent-desk > div > div:nth-child(2) > a');
        this.firstNameTextbox=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div:nth-child(1) > input');
        this.lastNameTextBox=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div:nth-child(2) > input');
        this.emailTextBox=Selector('#freeLearningRegistrationForm > div:nth-child(3) > input');
        this.passwordTextBox=Selector('#freeLearningRegistrationForm > div:nth-child(4) > input');
        this.registerNowButton=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button');
        this.successBtn=Selector('#freeLearningClaimButton');
        this.accessEbookNow=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button');
        this.clickOnEbook=Selector('#app > main > section > div > div > div:nth-child(1) > div > a > div')
        this.accessEbookAgain=Selector('#freeLearningClaimButton')
        //free e-book
        this.FirstNameTextBoxFreeEbook= Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div:nth-child(1) > input');
        this.LastNameTextBoxFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(2) > div > div.col.right > input');
 
        this.emailTextBoxFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(3) > input');
        this.passowrdTextBoxFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(4) > input');
        this.registerNowButtonFreeEbook=Selector('#freeLearningRegistrationForm > div:nth-child(6) > div > div:nth-child(1) > button');
        this.errorMessageFreeEbook=Selector('#freeLearningRegistrationErrorMessage')
        this.claimNow=Selector('#freeLearningClaimButton')
        this.Ch1section2=Selector('#collapse0 > ul > li:nth-child(2) > a')
        this.ChapterTwo=Selector('#accordion-toc > li:nth-child(2) > a > h5')
        this.ChapterTwoSection3=Selector('#collapse1 > ul > li:nth-child(3) > a')
        this.ChapterOneSection4=Selector('#collapse0 > ul > li:nth-child(4) > a')
        this.accessEbookNow=Selector('#freeLearningClaimButton')

        //Subscribe
        this.ProductSelect=Selector('#maincontent > div.columns > div > div:nth-child(5) > div:nth-child(2) > div > div > div > div > div.tombstone-container > div:nth-child(1) > a > span > span > img')
        this.loggedOutSubscribe=Selector('#primary-navigation > div > div.navigation__right > ul > li.menu__item.menu__link > a')
        this.loggeedOutBuyNowPrintEbook=Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > ul.price-list > li:nth-child(2) > span.price-list__link > a')
        this.loggedInSubscribe=Selector('#primary-navigation > div > div.navigation__right > ul > li.menu__item.menu__link > a')
        this.loggedInBuyNow=Selector('#app > main > header > div > div.product__info > div.grid.product-info.main-product > div > div.price > div > ul.price-list > li:nth-child(1) > span.price-list__link > a')
        this.ContinueShoppingButton=Selector('#maincontent > div.columns > div > div.cart-container > div.cart-summary > a > span')
        //this.emailfield=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div:nth-child(1) > input')
        //this.passwordfieeld=Selector('body > app-root > div > ng-component > div > div > ng-component > div > form > div:nth-child(2) > input')
        //this.LoginButton=Selector('#body > app-root > div > ng-component > div > div > ng-component > div > form > button')
        this.SubscribeButton=Selector('#menu-item-4625 > a > span')

        //reader
       // this.buyEbook= Selector ('#body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(1) > button');
        this.nextSection= Selector('#reader-content > div:nth-child(4) > a.btn.btn-primary.pull-right.btn-lg.btn-block')
        this.start= Selector ('#book-wrapper > div > div > div > div.button-group.text-right.ng-scope > a')
        this.beta= Selector ('body > div.page > div.ng-scope > div > div.container.book-page > div > div.visible-md.visible-lg > div > div.beta-reader-upsell__cta')
        
        //admin portal
        this.adminUserID = Selector ('#mat-input-0')
        this.adminPWD = Selector ('#mat-input-1')
        this.adminlogin = Selector ('body > app-root > ng-component > div > ng-component > mat-card > mat-card-content > form > div > button')
        this.adminfreelearning = Selector ('body > app-root > admn-main-container > div > div > div:nth-child(1) > admn-side-nav > mat-nav-list > a:nth-child(6) > div')
        this.adminaddoffer = Selector ('body > app-root > admn-main-container > div > div > div:nth-child(2) > admn-free-learning-ms-container > admn-free-learning-offers-list > div > button > span')
        this.adminprodid = Selector ('#mat-input-4')
        this.admincreate = Selector ('#mat-dialog-0 > ng-component > div.mat-dialog-actions > button.mat-button.mat-primary > span')
         this.selecttrendingtitle=Selector('#root > main > div.product-strip > div.row > div.col-md-6.trending-titles > div > div:nth-child(1) > a.title')

         //new homepage
        this.jumpbackin=Selector('#root > main > section.row.jumpBackIn-section > div > h2')
        this.recommendedblock=Selector('#root > main > section.row.recommendTitles-section > div > h2')
        this.selectjbititle=Selector('#root > main > section.row.jumpBackIn-section > div > div > div > div > div.slick-slide.slick-active.slick-current > div > div > div > div > a')
        this.viewbeta=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.visible-md.visible-lg > div > div.beta-reader-upsell__cta > a')
        this.Playlistpage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h1')
        this.Creditpage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h2') 
        this.Bookmarkpage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h1')
        this.Ownedpage=Selector('body > div.page > div.ng-scope > page-intro > div > div > p')
        this.Notepage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h2')
        this.Viewhistorypage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h1')
        this.Settingpage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h1')
        this.Helppage=Selector('body > div.page > div.ng-scope > page-intro > div > div > h1')
        this.Logoutpage=Selector('#primary-navigation > div > div.navigation__right > ul > li > a')


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
        this.MyLibrary=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > span > i')
        this.Home=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > div > div:nth-child(1)')
        this.Playlist=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > div > div:nth-child(2)')
        this.Credits=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > div > div:nth-child(3)')
        this.Bookmarks=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > div > div:nth-child(4)')
        this.Owned=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > div > div:nth-child(5)')
        this.Notes=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > div > div:nth-child(6)')
        this.Recent=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(2) > span')
        this.Viewhistory=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(2) > div > div.row.view-items-elements.view-history')
        this.Account=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(3)')
        this.Settings=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(3) > div > ul > li:nth-child(1)')
        this.Help=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(3) > div > ul > li:nth-child(2)')
        this.Logout=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(3) > div > ul > li:nth-child(3)')

 
        //ExistingReader
        this.AddPlaylist=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(1) > button > span')
        this.jumpbackin=Selector('#root > main > section.row.jumpBackIn-section > div > h2')
        this.CreateNewPlaylist=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div.btn-group.ng-scope.open > ul > li > a')
        this.CreatePlaylist=Selector('#playlistCreateModal > div > div > div.modal-header > h4')
        this.DayNightIcon=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(5) > button > i')
        this.FontIcon=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(6) > button > i')
        this.share=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div.btn-group.ng-scope.open > button > i')
        this.cancel=Selector('#playlistCreateModal > div > div > div.modal-body > form > div.row > div:nth-child(1) > a')
        this.BuyEbook=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(2) > button > span')
        this.RecommendedTitle=Selector('#root > main > section.row.recommendTitles-section > div > div > div > div > div.slick-slide.slick-active.slick-current > div > div > div')
        this.MyLibrary=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(1) > span')
        this.BrowseCategory=Selector('#primary-navigation > div > div.navigation__left > ul > li > span')
        this.Account=Selector('#primary-navigation > div > div.navigation__right > ul > li:nth-child(3) > span')
        this.FontA=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(2) > button > i')
        this.shareLogout=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(3) > button > i')
        this.Buy_Ebook=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.btn-group.toolbar.pull-right.mt15.mb30 > div:nth-child(1) > button > span')
        



        //BetaReader
        this.Buy=Selector('#book-container > div.lhs-book-title.flex-row > div.book-title-price > ul > li:nth-child(1) > a')
        this.MoreInfo=Selector('#book-container > div.lhs-book-title.flex-row > div.book-title-price > div > button')
        this.Viewbeta=Selector('body > div.page > div.ng-scope > div > div.container.book-page > div > div.visible-md.visible-lg > div > div.beta-reader-upsell__cta > a')
        this.ResumeLearning=Selector('#book-wrapper > div > div > div > div.button-group.text-right.ng-scope > a')

        //checkout
        this.checkoutEmail=Selector('#username')
        this.checkoutPassword=Selector('#password')
        this.checkoutName=Selector('#firstName')
        this.checkoutSurname=Selector('#lastName')
        this.checkoutContinueOne=Selector('#formStep1 > div.d-flex.justify-content-end.align-items-center > button')
        this.manually=Selector('#formStep2google > div > div > div.text-right > a')
        this.checkoutAdd1=Selector('#addressLine1')
        this.checkoutState=Selector('#formStep2 > div:nth-child(2) > div:nth-child(2) > div > span > span.selection > span > span.select2-selection__arrow')
        this.checkoutStateDropDown=Selector('body > span > span > span.select2-search.select2-search--dropdown > input')
        this.checkoutCity=Selector('#city')
        this.country=Selector('#formStep2 > div:nth-child(3) > div:nth-child(1) > div > span > span.selection > span > span.select2-selection__arrow')
        this.countryDropDown=Selector('body > span > span > span.select2-search.select2-search--dropdown > input')
        this.checkoutPostcode=Selector('#postcode')
        this.checkoutContinueTwo=Selector('#formStep2 > div.text-right > button')
        this.checkoutSelectCard=Selector('body > div.container.checkout > div > div.col-8.checkout-stepper-block-A > div.steps.step3.active > div > div.custom-control.custom-radio.d-flex.justify-content-between > div.text-left > label')
        this.checkoutSelectPaypal=Selector('body > div.container.checkout > div > div.col-8.checkout-stepper-block-A > div.steps.step3.active > div > div:nth-child(6) > label')
        this.cardNumber=Selector('#input-creditCardNumber')
        this.expireMonth=Selector('#input-creditCardExpirationMonth')
        this.monthDropDown=Selector('#input-creditCardExpirationMonth > option:nth-child(4)')
        this.expireYear=Selector('#input-creditCardExpirationYear')
        this.yearDropDown=Selector('#input-creditCardExpirationYear > option:nth-child(17)')
        this.cvv=Selector('#input-cardSecurityCode')
        this.startSub=Selector('#submitButton')
        this.securityCheck=Selector('#password')
        this.securityContinue=Selector('#txtButton')
        this.checkLandOnHome=Selector('#root > main > section > div > h2')
        this.subExists=Selector('#book-wrapper > div > div:nth-child(3) > div.panel-heading > h5')

        //owned page Subs
        this.ownedTitleName=Selector('body > div.page > div.ng-scope > div.container.mb10.ng-scope > product-listing > ul > li > div > product > div > div.product__body > div.col-xs-9 > h2')

        //owned account portal
        this.ownedTitleNameAccPortal=Selector('body > app-root > div > ng-component > div > mat-sidenav-container > mat-sidenav-content > account-products > div > div > div:nth-child(3) > account-product-details > div > div > div.details > div > div.product-details > h5')


       //NewReader
       this.NewMoreInfo=Selector('#book-container > div.lhs-book-title > div.prices > div > button')
       this.Aboutthisbook=Selector('body > div.fade.modal.show > div > div > div > div > div.container > div:nth-child(3) > div.col-md-9 > div:nth-child(1) > h3')
       this.TOCclick=Selector('#style-grey > div:nth-child(1) > div > div.collapse.show > div > ul > li.active.d-flex.justify-content-end > span')
       this.TOCpage=Selector('#_idParaDest-36')
       this.Sidebar=Selector('#root > div > div.show-sidebar > div.lhs.show-buttons > button > i')
       this.Bookmarkicon=Selector('#content .content-body .row:nth-child(1) .svg-icon')
       this.LHSbookmark=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > button:nth-child(1) > div > svg')
       this.Bookmarkbtn=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-panel.show-buttons > div.d-block > div.col.Bookmark-notes-container > div:nth-child(2) > div > div:nth-child(2) > button')
       this.Bookmarkprd=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-panel.show-buttons > div.d-block > div.col.Bookmark-notes-container > div.result-container > div.d-block.mr-3.false > div.col.book-mark-result-container.p-0 > div > div.col.header.mb-3.d-flex.justify-content-between.pl-0.pr-0 > span')
       this.LHSSearch=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > button:nth-child(2) > div > svg')
       this.Searchtitle=Selector('#search-input-title')
       this.Searchicon=Selector('#search-in-title-container > div.col.search-in-title-input-container.pt-5 > div > div > svg')
       this.Searchresult=Selector('#reader-rhs-search-in-content-result-container > div:nth-child(2) > div.row.content-body.p-3 > mark > mark')
       this.LHSplaylist=Selector('#root > div > div.show-sidebar > div:nth-child(4) > div.rhs.show-buttons > div.rhs-menu > button:nth-child(3) > div > svg')
       this.Createplaylistnew=Selector('body > div.fade.playlist-modal.modal.show > div > div > div > div.modal-body > div.playlist-list > div > div:nth-child(1) > div > a')
       this.Playlistname=Selector('#formBasicTitle')
       this.Playlistbtn=Selector('body > div.fade.playlist-modal.modal.show > div > div > div > div.modal-footer > button.btn-confirm.btn.btn-primary')
       this.Playlistmsg=Selector('.playlist-alert.alert-success')
       this.Buyprod=Selector('#book-container > div.lhs-book-title > div.prices > ul > li:nth-child(2) > a')
       this.Shopcart=Selector('#maincontent > div.page-title-wrapper > h1 > span')
       
       //Accounts section
       this.FreeTrial=Selector('body > div > div.ng-scope > page-intro > div.page-intro__upsell-wrapper.ng-scope > div > subs-upsell > div > div > span > a')
       this.EnterAddressManually=Selector('#formStep2google > div > div > div.text-right > a')
       this.Address1=Selector('#addressLine1')
       this.countrysearch=Selector('body > span > span > span.select2-search.select2-search--dropdown > input')
       this.countryselect=Selector('#select2-country-container')
       this.SelectState=Selector('#select2-state-container')
       this.StateSearch=Selector('body > span > span > span.select2-search.select2-search--dropdown > input')
       this.EnterCity=Selector('#city')
       this.EnterPIN=Selector('#postcode')
       this.Continue=Selector('#formStep2 > div.text-right > button')
       this.CreditCard=Selector('body > div.container.checkout > div > div.col-8.checkout-stepper-block-A > div.steps.step3.active > div > div.custom-control.custom-radio.d-flex.justify-content-between > div.text-left > label')
       this.CardholderName=Selector('#input-creditCardHolderName')
       this.CardNo=Selector('#input-creditCardNumber')
       this.Expirationmonth=Selector('#input-creditCardExpirationMonth')
       this.ExpirationMonthh=Selector('#input-creditCardExpirationMonth > option:nth-child(3)')
       this.ExpiryYr=Selector('#input-creditCardExpirationYear')
       this.ExpiryYear=Selector('#input-creditCardExpirationYear > option:nth-child(4)')
       this.EnterCVV=Selector('#input-cardSecurityCode')
       this.StartTrialButton=Selector('#submitButton')
       this.ReadOwned=Selector('body > div > div.ng-scope > div.container.mb10.ng-scope > product-listing > ul > li > div > product > div > div.product__buttons > a')
       this.Twelve=Selector('body > div > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a.pagination__limit-link.ml10.mr10.active')
       this.Twentyfour=Selector('body > div > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a:nth-child(2)')
       this.FortyEight=Selector('body > div > div.ng-scope > page-intro > div > div > pagination > nav > div.pagination__limits > a:nth-child(3)')
       this.SearchOwned=Selector('#search-input')
       this.Search=Selector('body > div > div.ng-scope > page-intro > div > div > div > form > div > div > button')
    }

}

export default new Page();