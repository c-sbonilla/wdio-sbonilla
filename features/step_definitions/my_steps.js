import homePage from "../page_objects/homePage";
import Page from "../page_objects/page";
import mainPage from "../page_objects/mainPage";
import widgetMenu from "../page_objects/widgetMenu";
import datePicker from "../page_objects/datePicker";
import sliderPage from "../page_objects/sliderPage";
import dragDropPage from "../page_objects/dragDropPage";
import hoverOverPage from "../page_objects/hoverOverPage";
import autoComplete from "../page_objects/autoComplete";
import chalk from "chalk";

Given(/^I navigate to the home page$/, () => {
    homePage.open()
});

When(/^I click on the site logo$/, () => {
    Page().clickPageElement(homePage.imageLogo);
});

Then(/^I should be redirected to (\S+)$/, (newUrl) => {
    mainPage.mainImage.waitForDisplayed(5000, false,chalk.bgBlueBright('Element not displayed after 5 secs'));
    expect(mainPage.mainPageUrl().to.eql(newUrl));
});

Then(/^the user should be able to accept the cookies$/, () => {
    Page().clickPageElement(mainPage.cookiesBtn);
    mainPage.cookiesPopUp.waitForDisplayed(5000, true, chalk.bold('Cookies PopUp still visible'));
});

Then(/^I navigate to the (\S+) menu$/, (newMenu) => {
    homePage.goToSubMenu(newMenu);
});

Then(/^the page url should contain (\S+)$/, (subMenu) => {
    const result = (homePage.subUrl() === subMenu);
    assert.isTrue(result);
});

Then(/^Widgets menu should be displayed$/, () => {
    assert.typeOf(widgetMenu.pageTitle.getText(), 'text', console.log(chalk.underline('Element is not a text')));
});

Then(/^I scroll to bring (\S+) label into view$/, (label) => {
    homePage.goToSubLabel(label);
});

Then(/^I click on the (\S+) label$/, (label) => {
    if(label === 'datePicker') {
        Page().clickPageElement(homePage.datePickerLabel);
    }else if( label === 'slider') {
        Page().clickPageElement(homePage.sliderLabel);
    }else if( label === 'droppable') {
        Page().clickPageElement(homePage.droppableLabel);
    }else if( label === 'autoComplete') {
        Page().clickPageElement(homePage.autocompleteLabel);
    }else if( label === 'switchWindow') {
        Page().clickPageElement(homePage.switchWindowLabel);
    } else if( label === 'spinner') {
        Page().clickPageElement(homePage.spinnerLabel);
    } else if( label === 'selectable') {
        Page().clickPageElement(homePage.selectableLabel);
    } else {
        console.log("Label does not exist");
    }
});

Then(/^I pick the september (\d+)$/, (dayNum) => {
    Page().clickPageElement(datePicker.dateLabel);
    datePicker.setDate(dayNum);
});

Then(/^the day displayed should be (\S+)$/, (fullDate) => {
    assert.isString(fullDate,'The full date was provided as String');
    expect(datePicker.dateLabel.getText()).to.eql(fullDate);
});

Then(/^I move the square element$/, () => {
    sliderPage.moveElement();
});

Then(/^I drag and drop the element$/, () => {
    dragDropPage.moveSquare();
});

Then(/^I hover over the Age element$/, () => {
    hoverOverPage.hoverOverElem();
});

Then(/^the page url should include (\S+)$/, (string) => {
    expect(browser.getUrl()).includes(string);
})

Then(/^autocompleted option JavaScript should be displayed$/, () => {
    autoComplete.setFirstChar();
    autoComplete.autoText.waitForDisplayed(500,false,chalk.bgRed('Autocompleted text does not match'));
});

Then(/^I open a new tab$/, () => {
    Page().clickPageElement('#content > div.demo-frame > button:nth-child(10)');
});

Then(/^I close the new tab$/, () => {
    browser.switchWindow('https://www.toolsqa.com/');
    browser.close();
});

Then(/^The widget element (should|should not) be visible$/, (expectation) =>{
    if(expectation === 'should'){
        homePage.widgetToggle.waitForDisplayed(1000, false, chalk.bgYellow('Element still invisible'));
    } else {
        homePage.widgetToggle.waitForDisplayed(1000,true,chalk.bgRed('Element still visible'));
    }
});

Then(/^I toggle off the widget$/, () => {
    Page().clickPageElement('#destroy');
});

Then(/^I click on the Item (\d+) element$/, (index) => {
    Page().clickPageElement(`#selectable > li:nth-child${index})`);
});

Then(/^The Item 3 should a background color$/,() => {
    const backgroundCol = browser.getCSSProperty('background');
    assert.isNotNull(backgroundCol, 'Cool, there is a background color');
});

