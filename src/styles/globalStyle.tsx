import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};

*{
  box-sizing: border-box;
}

body{
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease-in-out;
}

button{
  border: none;
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
}

a{
  color: inherit;
  text-decoration: none;
}
`;
