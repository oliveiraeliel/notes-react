import React from "react";
import { BiPencil } from "react-icons/bi";
import Button from "../../components/Button";

import { Board, Note } from "./styles";

export default function NewNote() {
  return (
    <Board>
      <h1>
        <BiPencil />
        Create New Note
      </h1>
      <Note></Note>
      <p>
        <Button
          // onClick={handleClickLogin}
          text="Create"
          buttonColor="#FF018F"
          transparent={true}
          btnWidth="70%"
          btnHeight="50"
          btnMargin_left="0"
          btnMargin_right="0"
          btnMargin_top="5"
          btnMargin_bottom="0"
          btnMargin="0"
          btnTxtSize="16"
        />
      </p>
    </Board>
  );
}
