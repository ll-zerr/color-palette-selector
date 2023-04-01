import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionsList selectColor={props.selectColor} />
      <SelectedCssOption
        selectedColor={props.selectedColor}
        palette={props.palette}
        addToPalette={props.addToPalette}
      />
    </div>
  </div>
);

export default CssOptions;
