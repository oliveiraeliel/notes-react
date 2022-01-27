import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import Button from "../../components/Button";

import { Board, Note, NoteTitle } from "./styles";
import { api } from "../../Api";

export default function NewNote() {
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const username = localStorage.getItem("username");

  function handleClickCreate() {
    if (title !== null || text !== null) {
      api
        .post(`/note/`, { title: title, text: text, username: username })
        .then((res) => {
          if (res.status === 201) {
            window.location.href = "home";
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      return;
    }
    alert("Fill all fields");
  }

  return (
    <Board>
      <h1>
        <BiPencil />
        Create New Note
      </h1>
      <NoteTitle
        placeholder="Set a title here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></NoteTitle>
      <Note
        placeholder="Write your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></Note>
      <p>
        <Button
          onClick={handleClickCreate}
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

