import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        max-width: 100%;
        font-family: monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f0f1f7;
    }

    a {
        text-decoration: none;
        text-transform: capitalize;
    }

    li {
        list-style: none;
    }

    input {
        font-size: 14px;
        outline: none;
        border: 0;
        background-color: transparent;
    }

    button {
        border: 0;
        cursor: pointer;
    }

`