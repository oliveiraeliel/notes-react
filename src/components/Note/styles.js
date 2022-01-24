import styled from "styled-components";

import { Note } from "../../pages/NewNote/styles";

export const Board = styled.div`
  width: 60vw;
  margin-top: 10vh;

  label {
    float: left;
    margin-left: 9.5vw;
    font-size: 16pt;
    font-weight: 300;
  }

`;

export const Text = styled(Note)`
  margin: 0;
  font-size: 14pt;
  font-weight: 300;
`;

export const Date = styled.a`
  font-size: 11pt;
  font-weight: 400;
  margin-right: 15px;

`;

export const Dates = styled.label`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 130px;
    justify-content: space-between;
    margin-bottom: 0;
`;

// export const Title = styled.label`

// `;
