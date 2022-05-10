import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #f0f0f0;
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
`;

const Container = styled.div`
`;

function App() {
  return (

    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>

      </BrowserRouter>
    </Container>

  );
}

export default App;
