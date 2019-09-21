import Page from "./page";

class DragDropMenu extends Page {
    get square() { return $('#slider > span')}

    moveSquare(){
        this.square.moveTo(140, 0);
    }

}
export default new DragDropMenu();
