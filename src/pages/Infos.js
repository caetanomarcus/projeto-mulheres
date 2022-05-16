import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header.2";

const Container = styled.div`
   
`;

const Content = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 176px;

    @media (max-width: 768px) {
        padding: 0 32px;
    }
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #5F1478;
    margin-bottom: 24px;
    margin-top: 40px;
    text-align: center;
`;

const ProgramationItem = styled.div`
    width: fit-content;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 96px;
    border: solid #c3c3c3 1px;

    @media (max-width: 768px) {
        border: none;
    }
  
`;

const ProgramationBox = styled.div`
    width: 100%;
    border: solid #c3c3c3 1px;
    border-radius: 8px;
    padding: 24px;

  
`;

const ProgramationTitle = styled.h2`

    font-size: 24px;
    margin-bottom: 48px;
`;

const Day = styled.h3`
    font-size: 20px;
    font-weight: 500;
`;

const Horario = styled.p`
    font-size: 20px;
    margin: 24px 0;
    font-weight: 300;

`;

const ConvidadosTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
    font-weight: 400;
`;

const Convidado = styled.p`

`;

const Infos = () => {

    const renderProgramation = () => {

        return (
            <ProgramationBox>
                   <ProgramationTitle>Webinário</ProgramationTitle>
                   <ProgramationItem>
                    <Day>18 de maio de 2022</Day>
                    <Horario>- Das 14:00 às 14:45 | Mesa de Abertura</Horario>
                    <ConvidadosTitle>Convidados:</ConvidadosTitle>
                    <Convidado>Curadores da Exposição </Convidado>
                    <Convidado>Maria Celi Chaves Vasconcelos (UERJ)</Convidado>
                    <Convidado>Cláudia Gonçalves de Lima (UERJ)</Convidado>
                    <Convidado>Pablo Álvarez Domínguez (Universidade de Sevilha – ES)</Convidado>
                    <Convidado>Ana Cristina B. Lopez M. Francisco (UERJ)</Convidado>
                    <Convidado>Luciana Borges Patroclo (UERJ)</Convidado>
                    <Convidado>Diogo dos Santos Silva (UERJ) - Coordenação Geral da Exposição</Convidado>
                    <Convidado>Alexandra Lima da Silva (UERJ)</Convidado>
                    <Horario>- Das 14:45 às 16:00 | Autoras/es de verbetes</Horario>
                    <ConvidadosTitle>Convidados:</ConvidadosTitle>
                    <Convidado>Evelyn Orlando (PUC-PR)</Convidado>
                    <Convidado>Terciane Ângela Luchese (UCS)</Convidado>
                    <Convidado>Robson Simões (UNIR)</Convidado>
                    <Convidado>Claudia Alves (UFF)</Convidado>
                   </ProgramationItem>
                   <ProgramationItem>
                    <Day>25 de maio de 2022</Day>
                    <Horario>Horário: 14:00 às 16:00</Horario>
                    <ConvidadosTitle>Convidadas:</ConvidadosTitle>
                    <Convidado>Marta Maria de Araújo (UFRN)</Convidado>
                    <Convidado>Rosa Lydia Teixeira Corrêa (PUC-PR)</Convidado>
                    <Convidado>Maria Teresa Santos Cunha (UDESC)</Convidado>
                    <Convidado>Dóris Bittencourt Almeida (UFRGS)</Convidado>
                   </ProgramationItem>
                </ProgramationBox>
        )
    }

    return (
        <Container>
           <Header />
            <Content>
                <Title>Informações</Title>
                {renderProgramation()}
            </Content>
           <Footer />
        </Container>
    )
}

export default Infos;