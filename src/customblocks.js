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
// generate block
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

Blockly.Blocks['variablefunction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("variable")
            .appendField(new Blockly.FieldTextInput(""), "variablename")
            .appendField("equals")
            .appendField(new Blockly.FieldTextInput(""), "equal");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['ifgreaterthanblock'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "variablename")
            .appendField("")
            .appendField(new Blockly.FieldDropdown([["is less than","is less than"], ["is greater than","is greater than"], ["is equal too","is equal too"]]), "dropdown")
            .appendField(new Blockly.FieldNumber(0), "number");
        this.setOutput(true, null);
        this.setColour(75);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// CODE TO RUN ALL THE BLOCKS

// block logic
Blockly.JavaScript['printfunction'] = function(block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable
    return text_variable;
};

// block logic
Blockly.JavaScript['printfunction'] = function(block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable
    return text_variable;
};

Blockly.JavaScript['block_type'] = function(block) {
    var text_variabelname = block.getFieldValue('variabelname');
    var dropdown_dropdown = block.getFieldValue('dropdown');
    var number_number = block.getFieldValue('number');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };