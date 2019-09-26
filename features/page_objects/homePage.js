const Page = require('./page');
class HomePage extends Page{
    constructor(){
        super();
        this.homeUrl = 'https://www.demoqa.com';
    }
    get imageLogo() { return $('#logo-events > a > img')}
    get widgetsMenu() { return $('#menu-top > li:nth-child(3) > a')}
    get interactionsMenu() { return $('#menu-top > li:nth-child(2) > a')}
    get homeMenu() { return $('#menu-top > li:nth-child(1) > a')}
    get doubleClickMenu() { return $('#menu-top > li:nth-child(4) > a')}
    get datePickerLabel() { return $('#sidebar > aside:nth-child(2) > ul > li:nth-child(14) > a')}
    get sliderLabel() { return $('#sidebar > aside:nth-child(2) > ul > li:nth-child(9) > a')}
    get droppableLabel() { return $('#sidebar > aside:nth-child(1) > ul > li:nth-child(4) > a')}
    get autocompleteLabel() {return $('#sidebar > aside:nth-child(2) > ul > li:nth-child(18) > a')};
    get switchWindowLabel() {return $('#sidebar > aside:nth-child(2) > ul > li:nth-child(3) > a')};
    get spinnerLabel() {return $('#sidebar > aside:nth-child(2) > ul > li:nth-child(8) > a')};
    get selectableLabel() {return $('//*[@id="sidebar"]/aside[1]/ul/li[2]/a')};
    get automationPractice() { return $('//*[@id="sidebar"]/aside[2]/ul/li[3]')}
    get openTab() { return $('#content > div.demo-frame > button:nth-child(10)')}
    get thirdElem() { return $('//*[@id="selectable"]/li[3]')}
    get widgetToggle() {return $('#content > div.demo-frame > p:nth-child(5) > span > a.ui-button.ui-widget.ui-spinner-button.ui-spinner-up.ui-corner-tr.ui-button-icon-only')}

    openNewTab(){
        this.clickPageElement(this.openTab);
    }

    goToSubMenu(option){
        switch (option) {
            case 'widgets':
                this.clickPageElement(this.widgetsMenu);
                break;
            case 'interactions':
                this.clickPageElement(this.interactionsMenu);
                break;
            case 'home':
                this.clickPageElement(this.homeMenu);
                break;
            case 'doubleClick':
                this.clickPageElement((this.doubleClickMenu));
                break;
            default:
                console.log(chalk.greenBright('No available menu'));
        }
    }

    goToSubLabel(option){
        switch (option) {
            case 'datePicker':
                this.scrollToView(this.datePickerLabel);
                break;
            case 'slider':
                this.scrollToView((this.sliderLabel));
                break;
            case 'droppable':
                this.scrollToView(this.droppableLabel);
                break;
            case 'autoComplete':
                this.clickPageElement((this.autocompleteLabel));
                break;
            case 'switchWindow':
                this.clickPageElement((this.switchWindowLabel));
                break;
            case 'spinner':
                this.clickPageElement((this.spinnerLabel));
                break;
            case 'selectable':
                this.clickPageElement((this.selectableLabel));
                break;
            default:
                console.log(chalk.white("No available subMenu"));
        }
    }
}
module.exports = new HomePage;

