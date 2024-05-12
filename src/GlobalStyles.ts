import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 body{
background-color: ${(props) => props.theme.colors.VeryLightBlue};
font-family: 'Red Rose', sans-serif;
 }
 `;

export default GlobalStyles;
