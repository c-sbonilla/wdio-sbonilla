import Page from "./page";

class WidgetMenu extends Page {
    get pageTitle() { return $('#content > h1')}
}
export default new WidgetMenu();
