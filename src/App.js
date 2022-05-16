import { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemExposicao from './pages/ItemExposicao';
import Exposicao from './pages/Exposicao';
import Infos from './pages/Infos';

import close from './assets/icons/close.png';


//keyframes

const animationModal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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
width: 100vw;
height: fit-content;
`;

const MenuModal = styled.div`
  width: 100%;
  height: 160px;
  background: #3d0647;
  position: absolute;
  top: 0;
  z-index: 6;
  animation: ${animationModal} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  img {
    width: 50%;
  }

`;

const MenuItem = styled.li`
    width: 50px;
    height:30px ;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: center;

    align-items: center;
    cursor: pointer;
   
    a{
      color: #fff;
      text-decoration: none;
    }
    
  

`;


const menu = [
  {
      name: "Início",
      link: "/"
  },
  {
      name: "Exposição",
      link: "/exposicao"
  },
  {
      name: "Infos",
      link: "/infos"
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (

    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setOpen={setIsMenuOpen} />} />
          <Route path='/exposicao' element={<Exposicao setOpen={setIsMenuOpen} />} />
          <Route path="/exposicao/:id" element={<ItemExposicao setOpen={setIsMenuOpen} />} />
          <Route path='/infos' element={<Infos setOpen={setIsMenuOpen} />} />

        </Routes>
        {isMenuOpen && <MenuModal  >
          <CloseButton onClick={() => setIsMenuOpen(false)}>
            <img src={close} alt="close" />
          </CloseButton>
            {menu.map((item, index) => (
              <MenuItem key={index}>
                <a href={item.link}>{item.name}</a>
              </MenuItem>
            ))}
          </MenuModal>}
      </BrowserRouter>
    </Container>

  );
}

export default App;
