import React from "react";

import { Btn } from "./styles";

export default function Button(props) {
  return (
    <Btn
      buttonColor={props.buttonColor}
      transparent={props.transparent}
      btnWidth={props.btnWidth}
      btnHeight={props.btnHeight}
      btnMargin_left={props.btnMargin_left}
      btnMargin_right={props.btnMargin_right}
      btnMargin_top={props.btnMargin_top}
      btnMargin_bottom={props.btnMargin_bottom}
      btnTxtSize={props.btnTxtSize}
      onClick={props.onClick}
    >
      {props.text}
    </Btn>
  );
}
