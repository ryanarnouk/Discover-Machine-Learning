import Blockly from 'node-blockly/browser'

// import function 
Blockly.Blocks['importfunction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("import")
            .appendField(new Blockly.FieldTextInput("file name"), "NAME");
        this.setNextStatement(true, null);
        this.setColour(30);
    this.setTooltip("import ");
    this.setHelpUrl("");
    }
};

// console.log print function 
Blockly.Blocks['printfunction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("print")
            .appendField(new Blockly.FieldTextInput(""), "variable");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// apply function applies a specific algorithm such as KNN or SVM
Blockly.Blocks['applyfunction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("apply")
            .appendField(new Blockly.FieldDropdown([["K Nearest Neighbors","select"], ["Linear Regression","linearregression"], ["Support Vector Machine","svm"]]), "selectmodel");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};