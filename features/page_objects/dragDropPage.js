const Page = require('./page');

class DragDropMenu extends Page {
    get square() { return $('#draggable')}

    moveSquare(){
        this.square.moveTo(140, 0);
    }

}
module.exports = new DragDropMenu;


