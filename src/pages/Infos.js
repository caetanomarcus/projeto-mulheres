import React, { useState, useEffect } from "react";
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

const Box = styled.div`

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
const AutoresBox = styled.div``

const Autor = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
`;

const ProgramationBox = styled.div`
    width: 100%;
    height: ${({ expand }) => expand ? 'auto' : '70px'};
    border: solid #c3c3c3 1px;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 40px;
    overflow: hidden;

  
`;

const ProgramationTitle = styled.h2`

    font-size: 24px;
    margin-bottom: 48px;
    cursor: ${({noCursor}) => noCursor ? 'default' : 'pointer'};
    width: fit-content;

    @media (max-width: 768px) {
        font-size: 18px;
    }
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

const BlockBox = styled.div`
    margin-bottom: 24px;
`;

const Cargo = styled.p`
    font-weight: 700;
    margin-bottom: 4px;
`;

const Pessoa = styled.p``;

const autores = [
    'Adelly Magalhães Poyares',
    'Alejandro Enrique García Laínez',
    'Alessandra Cristina Furtado ',
    'Alessandro Sathler',
    'Alexandra Lima da Silva',
    'Alice Rigoni Jacques ',
    'Aline Pinto Pereira',
    'Amanda Dias de Oliveira',
    'Ana Cristina Borges López M. Francisco ',
    'Ana Lúcia Cunha',
    'Andre Jorge Marcelino da Costa Marinho ',
    'Angélica Borges ',
    'Armando Freitas Tramontano',
    'Bianca Joaquim Albuquerque de Melo',
    'Cinthya de Oliveira Nunes ',
    'Cíntia Nascimento de Oliveira Conceição',
    'Claudia Alves',
    'Dante Batista Silva',
    'Débora Rodrigues Caputo ',
    'Denise Medina França ',
    'Dóris Bittencour Almeida',
    'Edilene Simões Costa dos Santos',
    'Ednardo Monteiro Gonzaga do Monti',
    'Elen Biguelini',
    'Evelyn de Almeida Orlando ',
    'Fabiana Sena da Silva',
    'Fernando Rodrigo Dos Santos Silva ',
    'Flávia dos Santos Soares ',
    'Giuslane Francisca da Silva',
    'Heloisa Helena Meirelles dos Santos ',
    'Ingrid Constantino de Souza',
    'Izabel Cristina Galiaço Ávila',
    'Izabela Cristina de Melo Santos',
    'Jacqueline de Albuquerque Varella',
    'Juciele Pereira Dias',
    'Lia Faria ',
    'Lia Machado Fiuza Fialho ',
    'Libania Xavier ',
    'Lorenna Bolsanello de Carvalho',
    'Luciana Borges Patroclo',
    'Luciane Sgarbi S. Grazziotin',
    'Márcia Cabral da Silva',
    'Margarete May Berkenbrock-Rosito',
    'Maria Angélica da Gama Cabral Coutinho',
    'Maria Teresa Santos Cunha',
    'Maria Thais Fernandes',
    'Mariana de Aguiar Ferreira Muaze',
    'Marilyn Alves Maia',
    'Marta Maria de Araújo',
    'Marta Maria Gama',
    'Mônica da Silva Gomes',
    'Nailda Marinho da Costa',
    'Nicoli Braga Macêdo ',
    'Paloma Rezende de Oliveira ',
    'Patrícia Coelho ',
    'Paula Leonardi ',
    'Paulo Rezzutti',
    'Raylane Andreza Dias Navarro Barreto ',
    'Regina Lúcia Ferreira Cravo',
    'Renata Soares',
    'Robson Fonseca Simões',
    'Rosa Lydia Teixeira Corrêa',
    'Sabrinne Cordeiro Barbosa da Silva',
    'Sibila Lilian Osis',
    'Simone Silveira Amorim ',
    'Sônia Maria da Silva Araújo',
    'Tatiane de Freitas Ermel',
    'Terciane Ângela Luchese ',
    'Terezinha Oliveira',
    'Vania Grim Thies',
    'Vinicius Monção',
    'Walter Marcelo de Souza Ramundo',
    'Washington Dener dos Santos Cunha',

]

const Infos = ({ setOpen }) => {
    const [openWebinario, setOpenWebinario] = useState(false);
    const [openProgramacao, setOpenProgramacao] = useState(false);

    const handleClickExpandWebinario = (e) => {
        e.preventDefault();
        setOpenWebinario(!openWebinario);
    }

    const handleClickExpandProgramacao = (e) => {
        e.preventDefault();
        setOpenProgramacao(!openProgramacao);
    }

    const renderProgramation = () => {

        return (
            <ProgramationBox expand={openWebinario} >
                <ProgramationTitle onClick={handleClickExpandWebinario} > {openWebinario ? "-" : "+"}  Webinário</ProgramationTitle>
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

    const renderAutores = () => {

        return (
            <ProgramationBox expand={openProgramacao} >
                <ProgramationTitle onClick={handleClickExpandProgramacao} > {openProgramacao ? "-" : "+"} Autores dos verbetes</ProgramationTitle>
                <AutoresBox>
                    {autores.map((autor, index) => {
                        return (
                            <Autor key={index}>{autor}</Autor>
                        )
                    })}
                </AutoresBox>
            </ProgramationBox>
        )
    }

    const renderCreditos = () => {

        return (
            <Box>
                <ProgramationTitle noCursor >Institucional</ProgramationTitle>
                <AutoresBox>
                    <BlockBox>
                        <Cargo>Reitor</Cargo>
                        <Pessoa>Mario Sergio Alves Carneiro</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Pró-reitora de Extensão e Cultura</Cargo>
                        <Pessoa>Cláudia Gonçalves de Lima</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Diretor do Departamento Cultural</Cargo>
                        <Pessoa>Adair Leonardo Rocha</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Coordenador de Exposições</Cargo>
                        <Pessoa>Diogo Santos</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Comunicação Social</Cargo>
                        <Pessoa>Rosane Fernandez</Pessoa>
                        <Pessoa>Ana Carolina Jacuá</Pessoa>
                        <Pessoa>Daniela Gregório</Pessoa>
                        <Pessoa>Luane Martins</Pessoa>
                        <Pessoa>Amanda Chinen (bolsista)</Pessoa>
                        <Pessoa>Graziele Silva (bolsista Revisão)</Pessoa>
                        <Pessoa>Heloisa Mendes (bolsista)</Pessoa>
                        <Pessoa>Thayná Alves (bolsista)</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Programação Visual</Cargo>
                        <Pessoa>Ana Cristina Almeida</Pessoa>
                        <Pessoa>Henrique Barone</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Produção Cultural</Cargo>
                        <Pessoa>Rafael Ferezin</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Cenografia</Cargo>
                        <Pessoa>Rejane Manhães</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Administrativo</Cargo>
                        <Pessoa>Leandro Almeida</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Arte-educação</Cargo>
                        <Pessoa>Patricia Chiavazzoli</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Bolsistas</Cargo>
                        <Pessoa>Amanda Bandeira</Pessoa>
                        <Pessoa>Amanda Lopes</Pessoa>
                        <Pessoa>Andressa Abbagliato</Pessoa>
                        <Pessoa>Bruno Silva de Sousa (Bolsista ID)</Pessoa>
                        <Pessoa>Carla Fionda</Pessoa>
                        <Pessoa>Isaac Nicacio (PIBIC)</Pessoa>
                        <Pessoa>Karen Navega</Pessoa>
                        <Pessoa>Kássia Meireles</Pessoa>
                        <Pessoa>Luiz Tiago da Silva Gomes (IC CNPq)</Pessoa>
                        <Pessoa>Manuela Guimarães</Pessoa>
                        <Pessoa>Mariana Gon</Pessoa>
                        <Pessoa>Monique Araújo (Extensão)</Pessoa>
                        <Pessoa>Nana Maresti</Pessoa>
                        <Pessoa>Raphael Gualter Peixoto (Bolsista Apoio Técnico CNPq)</Pessoa>
                        <Pessoa>Renan Santos (Extensão)</Pessoa>
                        <Pessoa>Tiago Augusto Xavier de Souza (Bolsista Proatec)</Pessoa>
                        <Pessoa>Veronica Folla</Pessoa>
                    </BlockBox>
                    <BlockBox>
                        <Cargo>Secretaria da Direção</Cargo>
                        <Pessoa>Angélica Corrêa</Pessoa>
                        <Pessoa>Bernardo Abreu</Pessoa>
                        <Pessoa>Heloísa Barboza de Lima</Pessoa>
                    </BlockBox>
                </AutoresBox>

            </Box>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <Container>
            <Header setOpen={setOpen} />
            <Content>
                <Title>Informações</Title>
                {renderProgramation()}
                {renderAutores()}
                {renderCreditos()}
            </Content>
            <Footer />
        </Container>
    )
}

export default Infos;