import * as React from "react"
import styled from "styled-components"
import penaETinteiro from "../assets/penaetinteiro.jpg"

// styles
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #C9C6D1;
    background-image: url(${penaETinteiro});
    /* background-size: contain; */
    /* background-position: 2% 2%; */
    background-repeat: no-repeat;
    /* box-shadow: 0px 0px 10px #2F69FE; */
    display:flex ;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    
    `;


const TitleBox = styled.div`
    width: 100%;
    height: 80%;
    display:flex ;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #2F69FE;
    text-transform: uppercase;
    font-size: 59px;
    

`;


// markup
const Hero = () => {
  return (
    <Container>
        <TitleBox>
            <Title>Mulheres e Educação no Séc xix</Title>
        </TitleBox>

    </Container>
  )
}

export default Hero