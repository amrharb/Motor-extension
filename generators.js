Blockly.Python["pin_motor_right_stop"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 14,
    pin2 = 18;
  var code = `Pin(${pin1}, Pin.OUT).value(${false})\nPin(${pin2}, Pin.OUT).value(${false})\n`;
  return code;
};

Blockly.Python["pin_motor_right_forward"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 14,
    pin2 = 18;
  var code = `Pin(${pin1}, Pin.OUT).value(${true})\nPin(${pin2}, Pin.OUT).value(${false})\n`;
  return code;
};

Blockly.Python["pin_motor_right_backward"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 14,
    pin2 = 18;
  var code = `Pin(${pin1}, Pin.OUT).value(${false})\nPin(${pin2}, Pin.OUT).value(${true})\n`;
  return code;
};

Blockly.Python["pin_motor_left_stop"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 19,
    pin2 = 23;
  var code = `Pin(${pin1}, Pin.OUT).value(${false})\nPin(${pin2}, Pin.OUT).value(${false})\n`;
  return code;
};

Blockly.Python["pin_motor_left_forward"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 19,
    pin2 = 23;
  var code = `Pin(${pin1}, Pin.OUT).value(${true})\nPin(${pin2}, Pin.OUT).value(${false})\n`;
  return code;
};

Blockly.Python["pin_motor_left_backward"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 19,
    pin2 = 23;
  var code = `Pin(${pin1}, Pin.OUT).value(${false})\nPin(${pin2}, Pin.OUT).value(${true})\n`;
  return code;
};

Blockly.Python["pin_robot_stop"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 14,
    pin2 = 18,
    pin3 = 19,
    pin4 = 23;
  var code = `Pin(${pin1}, Pin.OUT).value(${false})\nPin(${pin2}, Pin.OUT).value(${false})\nPin(${pin3}, Pin.OUT).value(${false})\nPin(${pin4}, Pin.OUT).value(${false})\n`;
  return code;
};

Blockly.Python["pin_robot_forward"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 14,
    pin2 = 18,
    pin3 = 19,
    pin4 = 23;
  var code = `Pin(${pin1}, Pin.OUT).value(${true})\nPin(${pin2}, Pin.OUT).value(${false})\nPin(${pin3}, Pin.OUT).value(${false})\nPin(${pin4}, Pin.OUT).value(${true})\n`;
  return code;
};

Blockly.Python["pin_robot_backward"] = function (block) {
  Blockly.Python.definitions_["from_machine_import_pin"] =
    "from machine import Pin";
  var pin1 = 14,
    pin2 = 18,
    pin3 = 19,
    pin4 = 23;
  var code = `Pin(${pin1}, Pin.OUT).value(${false})\nPin(${pin2}, Pin.OUT).value(${true})\nPin(${pin3}, Pin.OUT).value(${true})\nPin(${pin4}, Pin.OUT).value(${false})\n`;
  return code;
};
