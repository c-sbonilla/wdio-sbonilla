const Page = require('./page')
class DateMenu extends Page{
    get dateLabel() { return $('#datepicker')}

    setDate(date) {
        this.dateLabel.setValue(date)
    }

}
module.exports = new DateMenu;
