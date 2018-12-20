/* eslint-disable */
// disable linting on this file in specific
import Blockly from 'node-blockly/browser'

// import function 
Blockly.Blocks['importfunction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("import")
            .appendField(new Blockly.FieldTextInput("file name"), "filename");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
    this.setTooltip("");
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
            .appendField(new Blockly.FieldDropdown([["K Nearest Neighbors","knearest"], ["Linear Regression","linearregression"], ["Support Vector Machine","svm"]]), "selectmodel");
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
            .appendField(new Blockly.FieldTextInput("variable"), "variablename")
            .appendField("equals")
            .appendField(new Blockly.FieldTextInput("default"), "equal");
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

Blockly.Blocks['ifgreaterthanblock'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "variablename")
            .appendField(new Blockly.FieldDropdown([["is less than","is less than"], ["is greater than","is greater  than"], ["is equal too","is equal too"]]), "dropdown")
            .appendField(new Blockly.FieldNumber(0), "number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(75);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['functionblock'] = {
    init: function() {
        this.appendValueInput("function")
            .setCheck(null)
            .appendField("function")
            .appendField(new Blockly.FieldTextInput("name"), "functionname");
        this.appendDummyInput();
        this.appendStatementInput("statement")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['argumentblock'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("arguments")
            .appendField(new Blockly.FieldTextInput(" "), "argumentblock");
        this.setOutput(true, null);
        this.setColour(185);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['callfunctionblock'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("call function")
            .appendField(new Blockly.FieldTextInput("name"), "function name")
            .appendField(new Blockly.FieldTextInput("arguments"), "arguments");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['setdata'] = {
    init: function() {
        this.appendValueInput("setdata")
            .setCheck(null)
            .appendField("set data")
            .appendField(new Blockly.FieldTextInput("X value"), "xvalue")
            .appendField(new Blockly.FieldTextInput("Y value"), "yvalue");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['testingdata'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set testing data")
            .appendField(new Blockly.FieldNumber(0, 0, 100), "testingdata");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};
  


// CODE TO RUN ALL THE BLOCKS

// block logic
Blockly.JavaScript['printfunction'] = function(block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable
    return text_variable + ',' + 'printfunction';
};

Blockly.JavaScript['importfunction'] = function(block) {
    var text_filename = block.getFieldValue('filename');
    // TODO: Assemble JavaScript into code variable.
    return `${text_filename},importfunction`;
};
  
Blockly.JavaScript['callfunctionblock'] = function(block) {
    var text_function_name = block.getFieldValue('function name');
    var text_arguments = block.getFieldValue('arguments');
    // TODO: Assemble JavaScript into code variable.
    // here we can return the values and then when testing make sure that they are the proper values
    return `${text_function_name},${text_arguments},callfunctionblock,`;
  };

Blockly.JavaScript['functionblock'] = function(block) {
    var text_functionname = block.getFieldValue('functionname');
    var value_function = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
    // TODO: Assemble JavaScript into code variable.
    if(value_function !== "") {
        return `${text_functionname},${value_function},${statements_statement},functionblock,`;
    } else {
        return `${text_functionname},${statements_statement},functionblock,`
    }
};

Blockly.JavaScript['setdata'] = function(block) {
    var text_xvalue = block.getFieldValue('xvalue');
    var text_yvalue = block.getFieldValue('yvalue');
    var value_setdata = Blockly.JavaScript.valueToCode(block, 'setdata', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return `${text_xvalue},${text_yvalue},${text_yvalue},setdata`;
}

Blockly.JavaScript['applyfunction'] = function(block) {
    var dropdown_selectmodel = block.getFieldValue('selectmodel');
    // TODO: Assemble JavaScript into code variable.
    return `${dropdown_selectmodel},applyfunction,`;
};

Blockly.JavaScript['variablefunction'] = function(block) {
    var text_variablename = block.getFieldValue('variablename');
    var text_equal = block.getFieldValue('equal');
    // TODO: Assemble JavaScript into code variable.

    // FIGURE OUT HOW TO OUTPUT AS ARRAY AND CONTINUE WITH REST OF BLOCKS
    return text_variablename + ',' + text_equal + ',' + 'variablefunction' + ',';
};

Blockly.JavaScript['ifgreaterthanblock'] = function(block) {
    var text_variablename = block.getFieldValue('variablename');
    var dropdown_dropdown = block.getFieldValue('dropdown');
    var number_number = block.getFieldValue('number');
    // TODO: Assemble JavaScript into code variable.
    return `${text_variablename},${dropdown_dropdown},${number_number},`;
};

Blockly.JavaScript['argumentblock'] = function(block) {
    var text_argumentblock = block.getFieldValue('argumentblock');
    // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
    return `${text_argumentblock},argumentblock`;
};

Blockly.JavaScript['testingdata'] = function(block) {
    var number_testingdata = block.getFieldValue('testingdata');
    // TODO: Assemble JavaScript into code variable.
    return `${number_testingdata},testingdata`;
};