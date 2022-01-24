import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Board, NewNote, Notes } from "./styles";
import { api } from "../../Api";
import Note from "../../components/Note";

export default function Home() {
  const username = localStorage.getItem("username");
  const [datas, setDatas] = useState([]);
  // const datas = [];
  const items = [];
  let notes = "";

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
  // useEffect(() => {
  // datas.map((row) => {
  //   // notes += `<Note title={row.title} />`;
  //   console.log(row.title + " " + row.text);
  // });
  // }, [datas]);
  // const a = [
  //   {
  //     _id: "61edaf49284b546edfe2fad8",
  //     title: "Prova de matematica",
  //     text: "Prova de matematica. Estudar lei dos cossenos, lei dos senos e ciclo trigonométrico",
  //     username: "elielOliveira",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61edaf5d284b546edfe2fada",
  //     title: "Prova de matematica",
  //     text: "Prova de matematica. Estudar lei dos cossenos, lei dos senos e ciclo trigonométrico",
  //     username: "elielOliveira",
  //     __v: 0,
  //   },
  // ];
  // console.log(ObjectId("61edaf5d284b546edfe2fada").getTimestamp());

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
        const data = new Date(row.createdAt.substring(0, 10));
        let d = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
        // console.log(data.toLocaleDateString());
        return (
          <Note
            title={row.title}
            text={row.text}
            date={d}
            time={row.createdAt.substring(11, 16)}
          />
        );
      })}
    </Board>
  );
  // 2022-01-23T22:49:00.581Z
}
{
  /* <h1>{row.title}</h1>; */
}
