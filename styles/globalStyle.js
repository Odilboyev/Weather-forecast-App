import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  background-color: #171717;
  color: #f1f1f1;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.center{
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
`;
export default GlobalStyle;
