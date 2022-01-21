import react from "react";
import styled from "styled-components";

export const Btn = styled.button`
  width: ${(props) => `${props.btnWidth}`};
  height: ${(props) => `${props.btnHeight}px`};
  background-color: ${(props) =>
    !props.transparent ? `${props.buttonColor}` : "transparent"};
  border: ${(props) =>
    props.transparent ? `1px solid ${props.buttonColor}` : "none"};
  color: ${(props) => (props.transparent ? `${props.buttonColor}` : "white")};
  margin-top: ${(props) => `${props.btnMargin_top}px`};
  margin-left: ${(props) => `${props.btnMargin_left}px`};
  margin-right: ${(props) => `${props.btnMargin_right}px`};
  margin-bottom: ${(props) => `${props.btnMargin_bottom}px`};
  margin: ${(props) => `${props.btnMargin}px`};
  font-size: ${props => `${props.btnTxtSize}pt`};

  border-radius: 4px;
  &:hover {
    background-color: ${(props) =>
      props.transparent ? `${props.buttonColor}` : "transparent"};
    border: ${(props) =>
      !props.transparent ? `1px solid ${props.buttonColor}` : "none"};
    color: ${(props) =>
      !props.transparent ? `${props.buttonColor}` : "white"};
  }
`;
