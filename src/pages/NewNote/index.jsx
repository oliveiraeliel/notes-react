import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import Button from "../../components/Button";

import { Board } from "./styles";
import { api } from "../../Api";
import Note from "../../components/Note";
import { useEffect } from "react/cjs/react.development";

export default function NewNote() {
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const username = localStorage.getItem("username");

  if (!username) window.location.href = "/notes-react/#/login";

  function handleClickCreate() {
    if (title !== null || text !== null) {
      api
        .post(`/note/`, { title: title, text: text, username: username })
        .then((res) => {
          if (res.status === 201) {
            window.location.href = "/notes-react/#/home";
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

      <Note
        placeholder="Write your title here..."
        txtWidth="70%"
        value={title}
        maxRows={4}
        mTop="10vh"
        maxLength="40"
        readonly={false}
        onChange={(e) => setTitle(e.target.value)}
      ></Note>
      <Note
        placeholder="Write your note here..."
        txtWidth="70%"
        value={text}
        maxRows={10}
        // mTop="100px"
        maxLength="1000"
        readonly={false}
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
