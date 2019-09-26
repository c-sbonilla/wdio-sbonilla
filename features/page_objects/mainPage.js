const Page = require('./page');
class MainPage extends Page{
    constructor(){
        super();
        this.mainPageUrl = 'https://www.toolsqa.com/';
    }
    get mainImage() { return $('#slide-16-layer-3 > img')}
    get cookiesBtn() { return $('#cookie_action_close_header')}
    get cookiesPopUp() { return $('#cookie-law-info-bar')}
}
module.exports = new MainPage;
