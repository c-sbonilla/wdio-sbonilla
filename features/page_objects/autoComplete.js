import Page from "./page";

class AutoComplete extends Page {
    get textField() { return $('#tags')}
    get autoText() { return $('#ui-id-9')}

    setFirstChar(){
        this.textField.setValue('java');
    }

}
export default new AutoComplete();
