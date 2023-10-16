// Blockly Blocks for 'abs'
Blockly.Blocks['abs'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck("var")
        .appendField("lam");
    this.appendValueInput("EXPR")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(130);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly Blocks for 'app'
Blockly.Blocks['app'] = {
  init: function() {
    this.appendValueInput("EXPR1")
        .setCheck(["var", "exp", "Number"])
        .appendField("app");
    this.appendValueInput("EXPR2")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly Blocks for 'var'
Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("x"), "NAME");
    this.setOutput(true, "var");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly Blocks for 'math_number'
Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

// Blockly JavaScript code generator for 'abs'
Blockly.JavaScript.forBlock['abs'] = function(block) {
  var var_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE);
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = 'let lam: (var, exp) -> exp = { ' + var_name + ', ' + expr_code + ' in ' + expr_code + ' }\n';
  return code;
};

// Blockly JavaScript code generator for 'app'
Blockly.JavaScript.forBlock['app'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var code = 'let app: (exp) -> exp = { ' + expr1_code + ' in ' + expr2_code + ' }\n';
  return code;
};

// Blockly JavaScript code generator for 'var'
Blockly.JavaScript.forBlock['var'] = function(block) {
  var var_name = block.getFieldValue('NAME');
  var code = 'var ' + var_name + '\n';
  return code;
};

// Blockly JavaScript code generator for 'math_number'
Blockly.JavaScript['math_number'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = num;
  return code;
};

// Blockly Blocks for 'math_arithmetic'
Blockly.Blocks['math_arithmetic'] = {
  /**
   * Block for arithmetic operations.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.setOutput(true, 'Number');
    this.appendValueInput('A')
        .setCheck(['Number', 'var', 'exp']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['\u00D7', 'MULTIPLY'],
            ['\u00F7', 'DIVIDE'],
            ['^', 'POWER']]), 'OP');
    this.appendValueInput('B')
        .setCheck(['Number', 'var', 'exp']);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_ARITHMETIC_TOOLTIP);
  }
};

// Blockly JavaScript code generator for 'math_arithmetic'
Blockly.JavaScript['math_arithmetic'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_NONE);
  var operator = block.getFieldValue('OP');
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_NONE);

  switch (operator) {
    case 'ADD':
      var code = '(' + value_a + ' + ' + value_b + ')';
      break;
    case 'MINUS':
      var code = '(' + value_a + ' - ' + value_b + ')';
      break;
    case 'MULTIPLY':
      var code = '(' + value_a + ' * ' + value_b + ')';
      break;
    case 'DIVIDE':
      var code = '(' + value_a + ' / ' + value_b + ')';
      break;
    case 'POWER':
      var code = 'pow(' + value_a + ', ' + value_b + ')';
      break;
    default:
      var code = '';
  }
  
  return code;
};
