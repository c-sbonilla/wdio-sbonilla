import Page from "./page";

class HoverOver extends Page {
    get ageLabel() { return $('#tooltipDemo')}

    hoverOverElem(){
        browser.elementHover(this.ageLabel);
    }

}
export default new HoverOver();
