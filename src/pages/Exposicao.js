import React from "react";
import styled from "styled-components";
import Header from "../components/Header.2";
import { images } from "../data/images";

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 176px;
    margin-top: 60px;

    a{
        width: 30%;
        height: fit-content;
        margin: 4px 8px;

    }
`;

const ImgContainer = styled.div`
    width: 100%;
    height: fit-content;
    /* background-image: ${props => `url(${props.src})`};
    background-size: cover;
    background-position: center; */
    cursor: pointer;
    position: relative;

    :hover {
        filter: grayscale(100%) brightness(70%) sepia(20%) hue-rotate(-100deg) saturate(500%) contrast(1);

        div{
            display: flex;
        }
    }
`;

const Img = styled.img`
    width: 100%;

    margin-bottom: 2%;
    cursor: pointer;

    :hover {
        /* opacity: 0.5; */
        /* border: solid 1px #000; */
        
    }
`;

const NameContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -12px);
    background-color: #00000030;
    backdrop-filter: blur(5px);
    border-radius: 8px 8px 0 0;
`;

const Name = styled.p`
   
    font-size: 14px;
    color: #fff;
   

`;


const Exposicao = () => {

    return (
        <Container>
            <Header />
            <ImagesContainer>
                {images.map((image) => (
                    <a key={image.id} href={"/exposicao/" + image.id} >
                        <ImgContainer src={image.src}>
                            <Img src={image.url} alt={image.name} />
                            <NameContainer>
                                <Name>{image.name}</Name>
                            </NameContainer>
                        </ImgContainer>
                    </a>
                ))}
            </ImagesContainer>
        </Container>
    )
}

export default Exposicao;