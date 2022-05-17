import React from "react";
import styled from "styled-components";

//images

import barraDeLogos from '../assets/barra_de_logos.png'

const Container = styled.div`
    width: 100%;
    padding: 68px 36px;
    padding-bottom: 16px;
`;

const ContentBox = styled.div`
    width: 100%;
    background-color: #7e0afa12;
`;

const Img = styled.img`
    width: 100%;
`
;

const Footer = () => {

    return (
        <Container>
            <Img src={barraDeLogos} />
        </Container>
    )
}

export default Footer;