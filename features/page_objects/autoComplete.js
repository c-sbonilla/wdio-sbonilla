const Page = require('./page');

class AutoComplete extends Page {
    get textField() { return $('#tags')}
    get autoText() { return $('#ui-id-1')}

    setFirstChar(){
        this.textField.setValue('java');
    }

}
module.exports = new AutoComplete;
