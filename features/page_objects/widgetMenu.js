const Page = require('./page');
class WidgetMenu  extends Page{
    constructor(){
        super();
        this.widgetUrl = 'https://demoqa.com/category/widgets/';
    }
    get distroy() { return $('#destroy')}
    get pageTitle() { return $('#content > h1')}
}
module.exports = new WidgetMenu;

