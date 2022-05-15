import React from "react";
import styled from "styled-components";

//images

import barraDeLogos from '../assets/barra_de_logos.jpg'

const Container = styled.div`
    width: 100%;
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