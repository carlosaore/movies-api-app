import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        margin: 0;
        padding: 0;
    }

    ul li {
        display : inline;
        margin-right : 5%
    }

    ul li a {
        text-decoration : none;
        font-weight : bold;
        color : gray;
        text-transform : uppercase;
    }

    ul li a:hover {
        color : blueviolet;
    }
`
 
export default GlobalStyle;