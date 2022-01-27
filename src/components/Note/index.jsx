import TextareaAutosize from "react-autosize-textarea";

import { Board, Date, Dates } from "./styles";

export default function Note(props) {
  return (
    <Board mTop={props.mTop} border={props.border}>

      <label>{props.title}</label>
      <Dates>
        <Date>{props.date}</Date>
        <Date>{props.time}</Date>
      </Dates>
      <TextareaAutosize
        value={props.text}
        maxRows={props.maxRows}
        style={{
          width: `${props.txtWidth}`,
          resize: "none",
          padding: "15px",
          fontSize: "19px",
          borderRadius: "4px",
          outline: "none",
          lineHeight: "30px",
          fontFamily: "Roboto, sans-serif",
          borderColor: "#d3d3d3",
        }}
        className="txt"
        readOnly={props.readonly}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
      />
    </Board>
  );
}