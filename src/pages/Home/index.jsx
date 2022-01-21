import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Board, NewNote, Notes } from "./styles";

export default function Home() {
  return (
    <Board>
      <h1>Notes</h1>
      <NewNote href="/new-note">
        <a>
          <AiOutlinePlus />
        </a>
        New notes
      </NewNote>
      <Notes></Notes>
    </Board>
  );
}
