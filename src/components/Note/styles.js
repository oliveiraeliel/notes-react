import styled from "styled-components";

export const Board = styled.div`
  /* width: 60vw; */
  margin-top: ${(props) => `${props.mTop}`};

  border: ${(props) => (props.border ? `1px solid #d3d3d3` : "none")};
  /* border-radius: 4px; */
  padding: ${(props) => (props.border ? `20px` : "none")}; ;


  label {
    float: left;
    margin-left: 9.5vw;
    font-size: 16pt;
    font-weight: 300;
  }

  .txt::-webkit-scrollbar {
    width: 0px;
  }
  .txt:focus {
    border-width: 2px;
  }
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
