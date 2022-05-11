import * as React from "react"
import styled from "styled-components"

// styles
const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    position: fixed; 
    background-color: #0c0d0c;  
    color: #fff;    
    padding: 24px 126px;
    z-index: 2;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Container = styled.div`
    width: 100% ;
    height: 100%;
    /* max-width: 1366px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
`;

const UerjTextContainer = styled.div`
    width: 100%;
    height: 20%;
    display:flex ;
    justify-content: space-between;
    
`;


const SubTitle = styled.h2`
     font-size: 11px;
     width: 30% ;
   
`;

const Menu = styled.ul`
    width: 40% ;
    min-width: 400px;
    display: flex;
    justify-content: space-between;
    list-style: none;

  

    a{
        text-decoration: none;
        color: inherit;
    }
    
`;

const MenuItem = styled.li`
    width: 110px;
    height:30px ;
    font-size: 14px;
    font-weight: 600;
    border: solid  1px #7e0afa; //#575c59 1px;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    cursor: pointer;
    
   

    &:hover{
        border-color: #2F69FE;
    }

`;

//data
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
        name: "Contato",
        link: "/contato"
    },
]


// markup
const Header = () => {
  return (
    <Wrapper>
        <Container>
        <UerjTextContainer>
        <SubTitle>O Departamento Cultural da Pró-Reitoria de Extensão e Cultura da Universidade do Estado do Rio de Janeiro apresenta a exposição</SubTitle>
        <Menu>
            {menu.map(item => (
                <MenuItem key={item.name}>
                    {item.name}
                </MenuItem>
            ))}

        </Menu>
        </UerjTextContainer>
        </Container>
    </Wrapper>
  )
}

export default Header