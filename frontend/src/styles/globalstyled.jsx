import { createGlobalStyle, css } from 'styled-components'


export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0px;
    }
   body {
    ${({ theme }) =>  css`
        background-color: ${theme.color.black};
        min-height:100vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
        ` 
    }}
`;
