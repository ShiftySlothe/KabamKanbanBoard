import styled from "styled-components";

interface AppContainerProps {
  margin?: string;
  padding?: string;
  fontSize?: string;
}

export const AppContainer = styled.div<AppContainerProps>`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  list-style-type: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
`;

interface FullScreenContainerProps {
  background?: string;
}
export const FullScreenContainer = styled.section<FullScreenContainerProps>`
  width: 100%;
  height: 100vh;
  background: ${(props) => (props.background ? props.background : "white")};
`;

interface ButtonProps {
  display?: string;
  color?: string;
  fontWeight?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  boxShadow?: string;
  fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
  button {
    display: ${(props) => (props.display ? props.display : "inline-block")};
    color: ${(props) => (props.color ? props.color : "white")};
    font-weight: ${(props) => (props.display ? props.display : "400")};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: ${(props) => (props.border ? props.border : "")};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
    padding: ${(props) =>
      props.padding ? props.padding : "0.375rem 0.75rem;"};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.25rem")};
    line-height: 1.5;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "transparent"};
    box-shadow: ${(props) =>
      props.boxShadow ? props.boxShadow : "2px 2px 10px 2px #000000"};
  }
`;

export const SmallButton = styled(Button)`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  padding: 0.25rem 0.5rem;
  font-size: 1.09375rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "white")};
  box-shadow: ${(props) =>
    props.boxShadow ? props.boxShadow : "1px 1px 5px 1px #000000"};
`;

export const LeftButton = styled.a`
  float: left;
  display: block;
`;

export const RightButtons = styled.div`
  float: right;
`;
