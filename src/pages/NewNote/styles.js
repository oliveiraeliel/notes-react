import styled from "styled-components";

export const Board = styled.div`
  width: 80vw;
  height: 80vh;
  text-align: center;
  margin: auto;
  margin-top: 10vh;
  min-width: 350px;
  @media (max-width: 800px) {
    textarea {
      height: 60vh;
    }
  }
`;

export const Note = styled.textarea`
  width: 70%;
  height: 50%;
  resize: none;
  margin-top: 10vh;
  font-size: 16pt;
  border: 1px solid black;
  border-radius: 4px;
  padding: 15px;
  font-weight: inherit;
`;
