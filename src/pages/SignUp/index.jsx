import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import Button from "../../components/Button";

import { Board, Field, Bottom } from "../Login/styles";

export default function SignUp() {
    function handleClickLogin(){
        window.location.href = "/login"
    }
    function handleClickSignUp(){
        window.location.href = "/home"
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
          <input maxLength={20}></input>
        </Field>
        <Field>
          <label>
            <RiLockPasswordLine />
            Password
          </label>
          <input type="password" maxLength={20}></input>
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
