var BlockColor = "#2ECC71";

Blockly.Blocks["ina_set_range"] = {
  init: function () {
    this.jsonInit({
      type: "ina_set_range",
      message0: "cài đặt thang đo %1",
      args0: [
        {
          type: "field_dropdown",
          name: "PARAM",
          options: [
            ["16V", "0"],
            ["32V", "1"],
          ],
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: "",
      colour: BlockColor,
      helpUrl: ""
    });
  },
};

Blockly.Python["ina_set_range"] = function (block) {
  var param = block.getFieldValue("PARAM");
  Blockly.Python.definitions_['import_ina219'] = 'from ina219 import INA219';
  Blockly.Python.definitions_['import_logging'] = 'from logging import INFO';
  Blockly.Python.definitions_['init_mpu6050'] = 'ina = INA219(log_level=INFO)';
  // TODO: Assemble Python into code variable.
  var code = "ina.configure(voltage_range=" + param+ ")\n";
  return code;
};


Blockly.Blocks["yolo_uno_ina219"] = {
  init: function () {
    this.jsonInit({
      colour: BlockColor,
      tooltip: "",
      message0: "giá trị %1 từ cảm biến",
      args0: [
        {
          type: "field_dropdown",
          name: "VALUE",
          options: [
            ["dòng điện", "current()"],
            ["điện áp", "voltage()"],            
            ["công suất", "power()"],
          ],
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Python["yolo_uno_ina219"] = function (block) {
  var value = block.getFieldValue("VALUE");
  Blockly.Python.definitions_['import_ina219'] = 'from ina219 import INA219';
  Blockly.Python.definitions_['import_logging'] = 'from logging import INFO';
  Blockly.Python.definitions_['init_mpu6050'] = 'ina = INA219(log_level=INFO)';
  // TODO: Assemble Python into code variable.
  var code = "ina." + value;
  return [code, Blockly.Python.ORDER_NONE];
};