Blockly.Blocks["yolouno_ina219"] = {
  init: function () {
    this.jsonInit({
      message0: "giá trị %1 từ cảm biến",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [
              "điện áp",
              "voltage()"
            ],
            [
              "dòng diện",
              "current()"
            ],
            [
              "công suất",
              "power()"
            ]
          ],
        }
      ],
      output: null,
      colour: "#d400d4",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["yolouno_ina219"] = function (block) {
  var type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ina219'] = 'from ina219 import INA219';
  Blockly.Python.definitions_['import_logging'] = 'from logging import INFO';
  var code = 'ina.' + type;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};