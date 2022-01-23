import styled from "styled-components";

export const Board = styled.div`
  width: 45vw;
  height: 70vh;
  margin: auto;
  margin-top: 25vh;
  min-width: 300px;
  max-width: 450px;
  

  input {
    border: none;
    border-bottom: 0.1px solid black;
    width: 85%;
    font-size: 16pt;
    text-align: left;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-bottom: 1px solid black;
  }

  label {
    font-size: 12pt;
    float: left;
    margin-left: 7%;
  }
`;

export const Field = styled.div`
  margin-bottom: 20px;
`;

export const Bottom = styled.div`
  width: 87%;
  margin: auto;
`;