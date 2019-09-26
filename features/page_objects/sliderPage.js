class SliderMenu {
    get square() { return $('#slider > span')}

    moveElement(){
        this.square.moveTo(200, 0);
    }

}
module.exports = new SliderMenu;

