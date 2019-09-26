const MainPage = require('../page_objects/mainPage');
const AutoComplete = require('../page_objects/autoComplete');
const DatePicker = require('../page_objects/datePicker');
const DragDropPage = require('../page_objects/dragDropPage');
const HomePage = require('../page_objects/homePage');
const HoverOverPage = require('../page_objects/hoverOverPage');
const SliderPage = require('../page_objects/sliderPage');
const WidgetMenu = require('../page_objects/widgetMenu');
const chai = require('chai');
const Chalk = require('../../node_modules/chalk')


Given(/^I navigate to the home page$/, () => {
    HomePage.openNewUrl(HomePage.homeUrl);
});

When(/^I click on the site logo$/, () => {
    HomePage.clickPageElement(HomePage.imageLogo);
});

Then(/^I should be redirected to (\S+)$/, (newUrl) => {
    MainPage.mainImage.waitForDisplayed(5000, false,'Element not displayed after 5 secs');
    expect(MainPage.mainPageUrl).to.eql(newUrl)
});

Then(/^the user should be able to accept the cookies$/, () => {
    MainPage.cookiesPopUp.waitForDisplayed(5000, false, 'Cookies PopUp not visible');
    MainPage.clickPageElement(MainPage.cookiesBtn);
    MainPage.cookiesPopUp.waitForDisplayed(1000, true, 'Cookies PopUp still visible');
});

Then(/^I navigate to the (\S+) menu$/, (newMenu) => {
    HomePage.goToSubMenu(newMenu);
});

Then(/^the page url should contain (\S+)$/, (subMenu) => {
    const result = WidgetMenu.widgetUrl.includes(subMenu);
    assert.isTrue(result);
});

Then(/^Widgets menu should be displayed$/, () => {
    assert.typeOf(WidgetMenu.pageTitle.getText(), 'string', console.log('Element is not a string'));
});

Then(/^I scroll to bring (\S+) label into view$/, (label) => {
    HomePage.goToSubLabel(label);
});

Then(/^I click on the (\S+) label$/, (label) => {
    if(label === 'datePicker') {
        HomePage.clickPageElement(HomePage.datePickerLabel);
    }else if( label === 'slider') {
        HomePage.clickPageElement(HomePage.sliderLabel);
    }else if( label === 'droppable') {
        HomePage.clickPageElement(HomePage.droppableLabel);
    }else if( label === 'autoComplete') {
        HomePage.clickPageElement(HomePage.autocompleteLabel);
    }else if( label === 'switchWindow') {
        HomePage.clickPageElement(HomePage.switchWindowLabel);
    } else if( label === 'spinner') {
        HomePage.clickPageElement(HomePage.spinnerLabel);
    } else if( label === 'selectable') {
        HomePage.clickPageElement(HomePage.selectableLabel);
    } else {
        console.log("Label does not exist");
    }
});

Then(/^I pick (\S+)$/, (date) => {
    DatePicker.clickPageElement(DatePicker.dateLabel);
    DatePicker.setDate(date);
});

Then(/^the day displayed should be (\S+)$/, (fullDate) => {
    assert.isString(fullDate,'The full date was provided as String');
    expect(DatePicker.dateLabel.getValue()).to.eql(fullDate);
});

Then(/^I move the square element$/, () => {
    SliderPage.moveElement();
});

Then(/^I drag and drop the element$/, () => {
    DragDropPage.moveSquare();
});

Then(/^I hover over the Age element$/, () => {
    HoverOverPage.hoverOverElem();
});

Then(/^the page url should include (\S+)$/, (string) => {
    expect(browser.getUrl()).includes(string);
});

Then(/^autocompleted option JavaScript should be displayed$/, () => {
    AutoComplete.setFirstChar();
    AutoComplete.autoText.waitForDisplayed(1000,false,'Autocompleted text does not match');
});

Then(/^I open a new tab$/, () => {
    HomePage.clickPageElement(HomePage.automationPractice);
    HomePage.openNewTab();
});

Then(/^I close the new tab$/, () => {
    browser.pause(2000);
    browser.closeWindow();
});

Then(/^The widget element (should|should not) be visible$/, (expectation) =>{
    if(expectation === 'should'){
        HomePage.widgetToggle.waitForDisplayed(1000, false, 'Element still invisible');
    } else {
        HomePage.widgetToggle.waitForDisplayed(1000,true,'Element still visible');
    }
});

Then(/^I toggle off the widget$/, () => {
    WidgetMenu.clickPageElement(WidgetMenu.distroy);
});

Then(/^I click on the Item 3 element$/, () => {
    HomePage.clickPageElement(HomePage.thirdElem);
});

Then(/^The Item 3 should have a background color$/,() => {
    const backgroundCol = HomePage.thirdElem.getCSSProperty('background-color');
    assert.isNotNull(backgroundCol, 'Cool, there is a background color');
});

