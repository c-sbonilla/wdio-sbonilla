class HoverOver {
    get ageLabel() { return $('#tooltipDemo')}

    hoverOverElem(){
       this.ageLabel.moveTo();
    }

}
module.exports = new HoverOver;

