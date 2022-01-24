import React from "react";

import { Board, Text, Date, Dates } from "./styles";

export default function Note(props) {
  return (
    <Board>
      <label>{props.title}</label>
      <Dates>
        <Date>{props.date}</Date>
        <Date>{props.time}</Date>
      </Dates>
      <Text>{props.text}</Text>
    </Board>
  );
}
