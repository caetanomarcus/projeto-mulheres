import React from 'react';
import styled from 'styled-components';
import Apresentation from '../components/Apresentation';
import Footer from '../components/Footer';
import Header from '../components/Header.2';
import Hero from '../components/Hero.2';


const Container = styled.div`
    
`;


const Home = () => {
    return (
        <Container>
            <Header />
            <Hero />
            <Apresentation />
            <Footer />
        </Container>
    )
}

export default Home;