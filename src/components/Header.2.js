import React from "react"
import styled from "styled-components"

// styles
const Wrapper = styled.header`
    width: 100%;
    height: 100px;
    max-width: 1440px;
    margin: 0 auto;
    /* position: fixed;  */
    /* background-color: #0c0d0c;  
    color: #fff;     */
    padding: 24px 176px;
    z-index: 2;

    @media (max-width: 1024px) {
        padding: 24px 32px;
    }
`;

const Container = styled.div`
    width: 100% ;
    height: 100%;
    /* max-width: 1440px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    
`;

const UerjTextContainer = styled.div`
    width: 100%;
    height: fit-content;
    display:flex ;
    justify-content: space-between;


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-end;
       
        
    }
    
`;


const SubTitle = styled.h2`
     font-size: 11px;
     width: 30% ;

     @media (max-width: 768px) {
        width: 100%;
        font-size: 10px;
    }
   
`;

const Menu = styled.ul`
    width: 40% ;
    height: fit-content;
    min-width: 400px;
    display: flex;
    justify-content: space-between;
    list-style: none;
   

  

    a{
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 768px) {
        display: none;
        
    }
    
`;

const MenuItem = styled.li`
    width: 120px;
    height:30px ;
    font-size: 16px;
    font-weight: 300;
    border: solid  1px #7e0afa; //#575c59 1px;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    align-items: center;
    cursor: pointer;
    
   

    &:hover{
        border-color: #2F69FE;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        font-size: 7px;
        width: 50px;
    }

`;

const MenuMobile = styled.div`
    display: none;
    width: 22px;
    height: 12px;
    margin-right: 12px;
    margin-left: 0;
    margin-top: 12px;
    cursor: pointer;


    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #7e0afa;
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
        name: "Infos",
        link: "/infos"
    },
]


// markup
const Header = ({setOpen}) => {
    return (
        <Wrapper>
            <Container>
                <UerjTextContainer>
                    <SubTitle>A FAPERJ e o Departamento Cultural da Pró-Reitoria de Extensão e Cultura da Universidade do Estado do Rio de Janeiro apresentam a Exposição</SubTitle>
                    <Menu>
                        {menu.map(item => (
                            <a href={item.link} key={item.name + Math.random()} ><MenuItem >
                                {item.name}
                            </MenuItem></a>
                        ))}

                    </Menu>
                    <MenuMobile  onClick={() => setOpen( prevState => !prevState)} >
                        <Line />
                        <Line />
                        <Line />
                    </MenuMobile>
                </UerjTextContainer>
            </Container>
        </Wrapper>
    )
}

export default Header