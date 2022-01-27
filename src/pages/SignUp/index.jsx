import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import Button from "../../components/Button";

import { Board, Field, Bottom } from "../Login/styles";
import { api } from "../../Api";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClickSignUp() {
    localStorage.clear();

    api
      .post("/user/sign-up", { username: username, passwordNotEncrypted: password })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("username", username);
          window.location.href = "/notes-react/#/home";
          return;
        }
        console.log(res);
      })
      .catch((err) => {
        alert("Dados incorretos");
        console.log(err);
      });
  }
  function handleClickLogin() {
    window.location.href = "/notes-react/#/login";
  }

  return (
    <Board>
      <h1>Sign up</h1>
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
          onClick={handleClickSignUp}
          text="Sign up"
          buttonColor="#5DB60A"
          transparent={false}
          btnWidth="77%"
          btnHeight="40"
          btnMargin_left="0"
          btnMargin_right="0"
          btnMargin_top="0"
          btnMargin_bottom="0"
          btnMargin="0"
          btnTxtSize="16"
        />
        <Button
          onClick={handleClickLogin}
          text="Login"
          buttonColor="#5DB60A"
          transparent={true}
          btnWidth="20%"
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
