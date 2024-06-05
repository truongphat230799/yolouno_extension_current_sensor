var BlockColor = "#2ECC71";

Blockly.Blocks["yolouno_ina219"] = {
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
            ["điện áp", "voltage()"],
            ["dòng điện", "current()"],
            ["công suất", "power()"],
          ],
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Python["yolouno_ina219"] = function (block) {
  var value = block.getFieldValue("VALUE");
  // TODO: Assemble Python into code variable.
  var code = "ina." + value;
  return [code, Blockly.Python.ORDER_NONE];
};