class Page {
    openNewUrl(path){
        browser.url(path);
    }

    clickPageElement(element){
        element.click();
    }

    scrollToView(element){
        element.scrollIntoView();
    }
}
module.exports = Page;
