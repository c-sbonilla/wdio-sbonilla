import Page from "./page";

class MainPage extends Page {
    get mainImage() { return $('#slide-16-layer-3 > img')}
    get cookiesBtn() { return $('#cookie_action_close_header')}
    get cookiesPopUp() { return $('#cookie-law-info-bar')}

    mainPageUrl(){
        return this.url;
    }
}
export default new MainPage();
