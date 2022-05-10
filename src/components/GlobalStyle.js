import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Anek Tamil', sans-serif; */
        font-family: 'Source Serif Pro', serif;

        body{
            /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0c0d0c;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
        }
    }

`;