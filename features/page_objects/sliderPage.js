import Page from "./page";

class SliderMenu extends Page {
    get square() { return $('#slider > span')}

    moveElement(){
        this.square.moveTo(200, 0);
    }

}
export default new SliderMenu();
