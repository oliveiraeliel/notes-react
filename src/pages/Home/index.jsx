import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { Board, NewNote } from "./styles";
import { api } from "../../Api";
import Note from "../../components/Note";

export default function Home() {
  const username = localStorage.getItem("username");
  const [datas, setDatas] = useState([]);

  function handleClickLogout() {
    window.location.href = "/notes-react/#/login";
  }

  useEffect(() => {
    if (username === null) {
      window.location.href = "/notes-react/#/login";
      return;
    }
    api
      .get(`/note/home/${username}`)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Board>
      <h1>
        <GrLogout onClick={handleClickLogout} />
        Notes
      </h1>
      <NewNote href="/notes-react/#/new-note">
        <a>
          <AiOutlinePlus />
        </a>
        New notes
      </NewNote>
      {datas.map((row) => {
        const data = new Date(row.createdAt);
        const months = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
        let min = data.getMinutes();
        if (min.toString().length === 1) min = `0${min}`;
        return (
          <Note
            title={row.title}
            text={row.text}
            date={`${data.getDate()}/${
              months[data.getMonth()]
            }/${data.getFullYear()}`}
            time={`${data.getHours()}:${min}`}
            txtWidth="70%"
            readonly={true}
            mTop="20px"
            border={true}
            maxRows={10}
          />
        );
      })}
    </Board>
  );
}
