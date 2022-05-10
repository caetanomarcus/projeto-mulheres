import React from "react";
import styled from "styled-components";

import sombrinha from "../assets/sombrinha.jpg";

const Container = styled.div`
width: 100%;
height: 300px;
color: #fff;
display: flex;
align-items: center;
background-image: url(${sombrinha});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const TopBox = styled.div`
width: 100%;
height: 68px;
background: transparent linear-gradient(180deg, #de6262 0%, #ffb88c 100%) 0% 0% no-repeat padding-box;
position: fixed;
top: 0;
`;

const Header = () => {
    return (
        <Container>
            <TopBox>
            <h1>Mulheres e Educação</h1>
            </TopBox>
        </Container>
    );
}

export default Header;