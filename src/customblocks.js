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

// CODE TO RUN ALL THE BLOCKS

// block logic
Blockly.JavaScript['printfunction'] = function(block) {
    var text_variable = block.getFieldValue('variable');
    // TODO: Assemble JavaScript into code variable
    return text_variable;
};

Blockly.JavaScript['functionblock'] = function(block) {
    var text_functionname = block.getFieldValue('functionname');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
  
Blockly.JavaScript['callfunctionblock'] = function(block) {
    var text_function_name = block.getFieldValue('function name');
    var text_arguments = block.getFieldValue('arguments');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

Blockly.JavaScript['functionblock'] = function(block) {
    var text_functionname = block.getFieldValue('functionname');
    var value_function = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};