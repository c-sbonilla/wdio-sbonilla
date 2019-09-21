'use strict';

export default class Page {
    constructor () {
        this.url = browser.getUrl()
    }

    open(path) {
        browser.url(path);
    }

    clickPageElement(element) {
        browser.click(element);
    }

    scrollToView(element) {
        browser.scrollIntoView(element);
    }
}
