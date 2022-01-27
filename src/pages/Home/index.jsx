import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Board, NewNote, Notes } from "./styles";
import { api } from "../../Api";
import Note from "../../components/Note";

export default function Home() {
  const username = localStorage.getItem("username");
  const [datas, setDatas] = useState([]);


  useEffect(() => {
    if (username === null) {
      console.log(username);
      window.location.href = "/login";
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
  console.log(datas);

  return (
    <Board>
      <h1>Notes</h1>
      <NewNote href="/new-note">
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
        return (
          <Note
            title={row.title}
            text={row.text}
            date={`${data.getDate()}/${
              months[data.getMonth()]
            }/${data.getFullYear()}`}
            time={`${data.getHours()}:${data.getMinutes()}`}
          />
        );
      })}
    </Board>
  );
}
