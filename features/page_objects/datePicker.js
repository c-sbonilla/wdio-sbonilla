import Page from "./page";

class DateMenu extends Page {
    get dateLabel() { return $('#datepicker')}

    setDate(num) {
        super.clickPageElement(`<a class="ui-state-default" href="#">${num}</a>`);
    }

}
export default new DateMenu();
