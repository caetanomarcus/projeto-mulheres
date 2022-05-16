import React from "react";
import styled from "styled-components";
import { texts } from "../data/texts";
import { images } from '../data/images';
import { useParams } from "react-router-dom";
import Header from "../components/Header.2";
import Footer from "../components/Footer";

const Container = styled.div`
     max-width: 1440px;
     margin: 0 auto;
`;

const Box = styled.div`
    padding: 0 176px;
    margin: 16px 0;
    margin-top: 98px;
   

    @media (max-width: 768px) {
        padding: 0 32px;
    }
`;

const AuthorBox = styled.div`
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    font-size: 16px;
    margin-top: 14px;
    line-height: 1.6;

    @media (max-width: 480px) {
        font-size: 14px;
        word-break: break-word;
        text-align: justify;
        line-height: 1.7;
      
    }
    
`;

const Citation = styled.p`
    font-size: 12px;
    margin: 24px 0;
    margin-left: 50%;
    text-align: justify;
`;

const Img = styled.img`
    width: 100%;
    margin-bottom: 60px;
    margin-top: 30px;
`;

const References = styled.p`
    font-size: 12px;
    word-break: break-word;
    margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;

    a{
        color: inherit;
    }
`;


const ItemExposicao = () => {
    const params = useParams();
    const { id } = params;
    const text = texts.find((text) => text.id === Number(id));
    const image = images.find((image) => image.id === Number(id));

    const replaceCodeToSup = (text, footNoteNumber) => {



        return text.replace(/#[0-9]/g, "¹");
    }
    const nextLink = `/exposicao/${Number(id) + 1}`;
    const prevLink = `/exposicao/${Number(id) - 1}`;

    return (
        <Container>
            <Header />
            <Box key={text.id}>
                <h1>{text.title}</h1>
                <Img src={image.url} alt={image.alt} />
                <ButtonContainer>
                    {(id > 1) && <a href={prevLink}>ANTERIOR</a>}
                    {(id < 70) && <a href={nextLink}>PRÓXIMO</a>}
                </ButtonContainer>
               <AuthorBox>
               <h2>{text.author.name}</h2>
                <h3>{text.author.institution}</h3>
                {text.author.department.map((department) =>
                    <h4 key={department}>{department}</h4>
                )}
               </AuthorBox>
               {text.author2 && (
                    <AuthorBox>
                    <h2>{text.author2.name}</h2>
                     <h3>{text.author2.institution}</h3>
                     {text.author2.department.map((department) =>
                         <h4 key={department}>{department}</h4>
                     )}
                    </AuthorBox>
               )}
                {text.initialCitations && text.initialCitations.map((citation) => (
                    <div>
                        <Citation key={citation.text.content}>{citation.text.content} <sup>{citation.text.footNoteNumber}</sup></Citation>
                    </div>
                ))}
                {text.text.map((paragraph) =>
                    <>
                        <Paragraph key={paragraph.content}>{replaceCodeToSup(paragraph.content, paragraph.footNoteNumber)}</Paragraph>
                        <Citation>{paragraph.citation}</Citation>
                    </>
                )}
                <h2>Referências bibliograficas</h2>
                {text.references.map((reference) =>
                    <References key={reference}>{reference.author}  <b>{reference.title}</b>  {reference.rest} </References>
                )}
            </Box>
            <Footer />
        </Container>
    )
}

export default ItemExposicao;