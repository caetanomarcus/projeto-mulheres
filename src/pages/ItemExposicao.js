import React from "react";
import styled from "styled-components";
import { texts } from "../data/texts";
import { images } from '../data/images';
import { useParams } from "react-router-dom";
import Header from "../components/Header.2";

const Container = styled.div`
    
`;

const Box = styled.div`
    padding: 0 176px;
    margin: 16px 0;
    margin-top: 98px;

    @media (max-width: 768px) {
        padding: 0 32px;
    }
`;

const Paragraph = styled.p`
    font-size: 16px;
    margin-top: 14px;
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

const ItemExposicao = () => {
    const params = useParams();
    const text = texts.find((text) => text.id === Number(params.id));
    const image = images.find((image) => image.id === Number(params.id));

    return (
        <Container>
            <Header />
            <Box key={text.id}>
                <h1>{text.title}</h1>
                <Img src={image.url} alt={image.alt} />
                <h2>{text.author.name}</h2>
                <h3>{text.author.institution}</h3>
                {text.author.department.map((department) =>
                    <h4 key={department}>{department}</h4>
                )}
                {text.initialCitations && text.initialCitations.map((citation) => (
                    <div>
                        <Citation key={citation.text.content}>{citation.text.content} <sup>{citation.text.footNoteNumber}</sup></Citation>
                    </div>
                ))}
                {text.text.map((paragraph) =>
                    <Paragraph key={paragraph.content}>{paragraph.content}</Paragraph>
                )}
                <h2>Referencias bibliograficas</h2>
                {text.references.map((reference) =>
                    <p key={reference}>{reference.author}  <b>{reference.title}</b>  {reference.rest} </p>
                )}
            </Box>

        </Container>
    )
}

export default ItemExposicao;