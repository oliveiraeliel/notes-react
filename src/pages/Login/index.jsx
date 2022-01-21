import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { Board, Field, Fields, Bottom } from "./styles";

import Button from "../../components/Button";

export default function Login() {
  function handleClickLogin() {
    window.location.href = "/home";
  }
  function handleClickSignUp() {
    window.location.href = "/sign-up";
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
          <input></input>
        </Field>
        <Field>
          <label>
            <RiLockPasswordLine />
            Password
          </label>
          <input type="password"></input>
        </Field>
      </div>
      <Bottom>
        <Button
          onClick={handleClickLogin}
          text="Login"
          buttonColor="#5F10B1"
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
          onClick={handleClickSignUp}
          text="Sign up"
          buttonColor="#5F10B1"
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
