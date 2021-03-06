import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { api } from "../../Api";
import { Board, Field, Bottom } from "./styles";

import Button from "../../components/Button";

export default function Login() {
  localStorage.clear();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClickLogin() {
    api
      .post("/user/login", { username: username, passwordNotEncrypted: password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("username", username);
          window.location.href = "/notes-react/#/home";
          return;
        }
      })
      .catch((err) => {
        alert("Dados incorretos");
        console.log(err);
      });
  }
  function handleClickSignUp() {
    window.location.href = "/notes-react/#/sign-up";
  }

  return (
    <Board>
      <h1>Login</h1>
      <div>
        <Field>
          <label>
            <AiOutlineUser />
            Username
          </label>
          <input
            maxLength={20}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </Field>
        <Field>
          <label>
            <RiLockPasswordLine />
            Password
          </label>
          <input
            type="password"
            maxLength={20}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Field>
      </div>
      <Bottom>
        <Button
          onClick={handleClickLogin}
          text="Login"
          buttonColor="#5F10B1"
          transparent={false}
          btnWidth="55%"
          btnHeight="40"
          btnMargin_left="0"
          btnMargin_right="0"
          btnMargin_top="0"
          btnMargin_bottom="0"
          btnMargin="0"
          btnTxtSize="16"
        />
        <Button
          onClick={handleClickSignUp}
          text="Sign up"
          buttonColor="#5F10B1"
          transparent={true}
          btnWidth="35%"
          btnHeight="40"
          btnMargin_left="5"
          btnMargin_right="0"
          btnMargin_top="0"
          btnMargin_bottom="0"
          btnMargin="0"
          btnTxtSize="16"
        />
      </Bottom>
    </Board>
  );
}
