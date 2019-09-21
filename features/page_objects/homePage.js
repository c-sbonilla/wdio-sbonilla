import Page from "./page";
import chalk from "chalk";

class HomePage extends Page {
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
    get selectableLabel() {return $('#selectable > li:nth-child(3)')};
    get widgetToggle() {return $('#content > div.demo-frame > p:nth-child(5) > span > a.ui-button.ui-widget.ui-spinner-button.ui-spinner-up.ui-corner-tr.ui-button-icon-only')}

    subUrl(){
        return this.url;
    }

    goToSubMenu(option){
        switch (option) {
            case 'widgets':
                super.clickPageElement(this.widgetsMenu);
                break;
            case 'interactions':
                super.clickPageElement(this.interactionsMenu);
                break;
            case 'home':
                super.clickPageElement(this.homeMenu);
                break;
            case 'doubleClick':
                super.clickPageElement((this.doubleClickMenu));
                break;
            default:
                console.log(chalk.greenBright('No available menu'));
        }
    }

    goToSubLabel(option){
        switch (option) {
            case 'datePicker':
                super.scrollToView(this.datePickerLabel);
                break;
            case 'slider':
                super.scrollToView((this.sliderLabel));
                break;
            case 'droppable':
                super.scrollToView(this.droppableLabel);
                break;
            case 'autoComplete':
                super.clickPageElement((this.autocompleteLabel));
                break;
            case 'switchWindow':
                super.clickPageElement((this.switchWindowLabel));
                break;
            case 'spinner':
                super.clickPageElement((this.spinnerLabel));
                break;
            case 'selectable':
                super.clickPageElement((this.selectableLabel));
                break;
            default:
                console.log(chalk.white("No available subMenu"));
        }
    }
}
export default new HomePage();
