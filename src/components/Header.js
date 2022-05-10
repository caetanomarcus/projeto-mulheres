import * as React from "react"
import styled from "styled-components"
import penaETinteiro from "../assets/penaetinteiro.jpg"

// styles
const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 48px 126px;
    position: ${props => props.fixed ? 'fixed' : 'relative'};
    background-color: ${props => props.fixed ? 'transparent' : '#2F69FE33'};
    /* background-color: #C9C6D1;
    background-image: url(${penaETinteiro});
    background-position: 2% 2%;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 10px #2F69FE;
    display:flex ;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative; */
    
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
    border: solid #575c59 1px; //#575c59
    display: flex;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    cursor: pointer;
    
   

    &:hover{
        border-color: #575c59;
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
const Header2 = (props) => {

    console.log(props.path)
  return (
    <Container fixed={props.path === '/'} >
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
  )
}

export default Header2