import React from 'react'
import styled, { keyframes } from 'styled-components'

//assets
import penaETinteiro from "../assets/penaetinteiro.jpg"
import pink from '../assets/pink.jpg'

//keyframes

const imageAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const Container = styled.div`
    width: 100%;
    /* height: calc(100vh - 100px); */
    padding: 72px 0;
    position: relative ;
    color:#5F1478; //#7e0afa ;
    padding-top: 148px;
    margin-bottom: 50px;
    position: relative;

    ::after {
        content: "";
        width: calc(100% - 174px);
        height: 1px;
        border-bottom: 1px solid #2F69FE30;
        position: absolute;
        bottom: -50px;
        left: 126px;
    }

    
`;

const UpBox = styled.div`
    width: calc(100% - 126px );
    padding: 0 126px;
    /* max-width: 1366px; */
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    margin: 0 auto ;
    border: solid #fff 1px;
    border-radius: 16px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    position: relative;
`;

const BubbleContainer = styled.div`
    position: absolute ;
    width: ${props => props.size};
    height:  ${props => props.size} ;
    top: ${props => props.top}  ;
    left: ${props => props.left};   
    right: ${props => props.right};
    overflow: hidden;
`;

const Bubbles = styled.div`
    width: ${props => props.size};
    height:  ${props => props.size} ;
    position: ${props => props.position || 'absolute'};
    top: ${props => props.top} ;
    left: ${props => props.left};   
    right: ${props => props.right};
    background-image: url(${pink});
    background-size: cover;
    transform: ${props => props.transform};
    border-radius: 50%;
    z-index: -1;
`;

const HeroTitleContainer = styled.div`
    height: 50% ;
    display:flex ;
    justify-content: center;
    align-items: center;
     border-radius: 4px;
     width: 50%; 
     padding: 16px 0px;
     
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
    font-size: 44px;
    position: relative;
    z-index: 1;
    width: ${({ width }) => width || '100%' };
    max-width: 1366px;

    ${({hasUnderline}) => hasUnderline && `
         ::before {
        content: '';
        width: 100%;
        height: 8px;
        background-color: #2F69FE3A;
        position: absolute;
        bottom: 5px;
        left: 10px;
        z-index: -1;
    }
    `};
   
`;

const Paragraph = styled.p`
    text-align: justify;
    font-weight: 300;
    font-size: 15px;
    
`;
const HeroTextContainer = styled.div`
    width: 55% ;
    /* border: solid #fff 2px;
    border-radius: 6px; */
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitlesBox = styled.div`
    width: 100%;
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title2 = styled.h2`
    font-weight: 600;
    
`;
const Title3 = styled.h2`
    font-weight: 500;
`;
const HeroImage = styled.div`
    width: calc(100% - 126px);
    height: 300px;
    /* max-width: 1366px; */
    display: flex ;
    justify-content: center;
    align-items: center;
    margin-right: 0;
    margin-left: auto;
    position: relative ;
    
`;

const Image = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${penaETinteiro});
    background-position: center;
    background-size: cover;
    border-radius: 2px;
    position: absolute;
    top: 65px;
    padding: 24px;
    animation: ${imageAnimation} 2s ease-in-out;
`;

const ImageText = styled.p`
    color: #fff;
    font-weight: 600;
    position: absolute;
    bottom: 24px;

`;

const Hero2 = () => {
    return (
        <Container>
            <BubbleContainer right='0' size='100px'>
                <Bubbles size='100px' top='0' right='-60px' position='relative' />
            </BubbleContainer>
            <Bubbles top='400px' left='-235px' size='300px' transform='translateY(50%)' />
            <UpBox>
                <HeroTitleContainer>
                    <TitleContainer>
                        <Title>Mulheres e Educação </Title>
                        <Title hasUnderline width='fit-content' >no Séc XIX</Title>
                    </TitleContainer>
                </HeroTitleContainer>
                <HeroTextContainer>
                    <TitlesBox>
                        <Title2> artefatos</Title2>
                        <Title3>e sensibilidades</Title3>
                    </TitlesBox>
                    <Paragraph>é uma atividade
                        cultural elaborada pelo Núcleo de Pesquisa História e Memória das Políticas Educacionais no
                        Território Fluminense (Nhempe), vinculado à Linha de Pesquisa Instituições, Práticas
                        Educativas e História do Programa de Pós-Graduação em Educação (ProPEd), da Universidade
                        do Estado do Rio de Janeiro (UERJ). Por estar sediada em uma Universidade socialmente
                        referenciada, a Exposição destina-se, a priori, a contribuir para a formação humanística de
                        seus estudantes, proporcionando a disseminação de bens culturais, juntamente com o
                        conhecimento.</Paragraph>

                </HeroTextContainer>
                
            </UpBox>
            <HeroImage>
                <Image>
                    <ImageText>Pena e Tinteiro</ImageText>
                </Image>
            </HeroImage>
        </Container>
    )
}

export default Hero2