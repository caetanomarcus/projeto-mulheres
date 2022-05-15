import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { images } from "../data/images";

//icons
import rightArrow from '../assets/icons/right-arrow.png'

//keyframes

const pageAnimation = keyframes`
    0% {
        opacity: .3;
        transform: scale(.9);
       
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const reversePageAnimation = keyframes`
    0% {
        opacity: .3;
        transform: scale(.9);
       
    }
    100% {
        opacity: 1;
        transform: scale(1);
       
    }
`;

//styles
const Wrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
`;

const Box = styled.div`
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    color:#5F1478;
    padding-top: ${({ hasPaddingTop }) => hasPaddingTop ? '72px' : '0'};
    position: relative;
    
`;

const Title = styled.h2`
    font-size: 38px;
    text-align: center;
    margin-bottom: 40px;

    ::first-letter {
        font-size: 60px;
        /* color: #000; */
    }
`;


const Page = styled.div`
    width: 100%;
    padding: 0 176px;
    margin: 0 auto;
    /* animation: ${({ hasAnimation, direction }) => hasAnimation ? direction === 1 ? pageAnimation : reversePageAnimation : 'none'} 1.2s ease-in-out; */
    position: relative;

    ${({ isFlex }) => isFlex && `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}

@media (max-width: 1024px) {
        padding: 24px 32px;
    }
`;

const ImageTextBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color:#5F1478;

    @media (min-width: 1441px) {
        justify-content: flex-start;
    }

    @media (max-width: 1365px) {
        flex-wrap: nowrap;
        flex-direction: column;
    }
`;

const ImagesBox = styled.div`
    width: 47%;
    max-width: 540px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    /* margin-right: 48px; */
    position: relative;


    @media (max-width: 1024px) {
        width: 100%;
        max-width: auto;
        margin: 10px 0;
        flex-direction: column;

    }
    
`;

const SmallImagesBox = styled.div`
    width: 47.5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        
    }
`;

const ParagraphBox = styled.div`
    width: 47%;


    @media (min-width: 1441px) {
        margin-right: 1vw;
    }

    @media (max-width: 1365px) {
        width: 100%;
        margin-bottom: 50px;
    }
`;

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color:#5F1478;

    ${({ firstLetterThemed }) => firstLetterThemed && `
           ::first-letter {
        font-size: 60px;
        // color: #AE276F;
        line-height: 1;
    }
    `}

    ${({ firstLineThemed }) => firstLineThemed && `

    ::first-line {
        font-size: 18px;
        font-weight: bold;
        // color: #AE276F;
        line-height: 1;

    }
    `}
`;

const Image = styled.div`
    width: ${({ width }) => width};
    height: ${({ big }) => big ? "280px" : "120px"};
    background-color: gray;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: ${(hasMarginTop) => hasMarginTop ? "20px" : "0"};
    margin-bottom: ${(alone) => alone ? "20px" : "0"};

    @media (max-width: 1024px) {
        width: 50vw;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 120px;
    }
`;


const Apresentation = () => {

    const [page, setPage] = useState(1);

    const generateFiveNumbers = (page) => {

    }

    const renderImages = (big, first, second, third, fourth) => {
        const lista = [images[first], images[second], images[third], images[fourth]];
        console.log(lista, 'lista', first, second, third, fourth);
        return (
            <ImagesBox>
                <Image width="50%" big image={images[big]?.url} />
                <SmallImagesBox>
                    {lista.map((item, index) => {

                        return <Image key={index} width={'40%'} image={item?.url} />


                        return null
                    })}
                </SmallImagesBox>
            </ImagesBox>
        )
    }


    const renderText = () => {
        console.log(page)
        return (
            <Page >

                <ImageTextBox>
                    <ParagraphBox>
                        <Paragraph firstLetterThemed >A Exposição <b>"Mulheres e educação no século XIX: <i>artefatos e sensibilidades</i>"</b> é uma atividade cultural elaborada pelo Núcleo de Pesquisa História e Memória das Políticas Educacionais no Território Fluminense (Nhempe), vinculado à Linha de Pesquisa Instituições, Práticas Educativas e História do Programa de Pós-Graduação em Educação (ProPEd), da Universidade do Estado do Rio de Janeiro (UERJ). Por estar sediada em uma Universidade socialmente referenciada, a Exposição destina-se, a priori, a contribuir para a formação humanística de seus estudantes, proporcionando a disseminação de bens culturais, juntamente com o conhecimento.

                        </Paragraph>
                    </ParagraphBox>
                    {renderImages(0, 1, 2, 3, 4)}
                </ImageTextBox>
                <Box hasPaddingTop>
                    <Paragraph >
                        A Exposição tem como patrocinadora a Fundação de Amparo à Pesquisa do Estado do Rio de Janeiro – FAPERJ, por meio do Programa de Apoio à Organização de Eventos Científicos, Tecnológicos e de Inovação no RJ. As peças apresentadas nesta Exposição pertencem a coleções particulares cedidas ao Nhempe, exibidas pela primeira vez ao público. Destaca-se, em grande parte do acervo, a Coleção “As Franciscas”, cujas peças originais do século XIX, possuem documentação de autenticidade e de valoração, tendo sido reunidas ao longo de anos, por meio da aquisição em leilões e antiquários. As imagens da Coleção foram cedidas ao Nhempe para esta Exposição temporária, bem como para a elaboração do Catálogo impresso com parte das peças apresentadas.

                    </Paragraph>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph > O objetivo da Exposição "Mulheres e educação no século XIX: <i>artefatos e sensibilidades</i>” é apresentar um acervo inédito de objetos e materiais de escrita originais do século XIX, sensíveis à utilização feminina, em um mundo regido pelo masculino. A finalidade da Exposição é oferecer um mosaico de artefatos que remetem à mulher, com seus conceitos e usos cotidianos descritos em verbetes, entre eles, notadamente, àqueles relacionados à educação e à toalete feminina, característicos da concepção do que era apropriado à elas, em um tempo e contexto monarquista, patriarcal e estratificado socialmente. O material exposto reúne um acervo de 70 peças classificadas em quatro categorias: <i>Cenários educativos; Escritas íntimas; Toaletes femininas e Imagens sensíveis</i>.</Paragraph>
                    <ImagesBox>
                        <Image width={'500px'} big alone image={images[5].url} />
                    </ImagesBox>
                    <Paragraph  >O eixo <i>Cenários educativos </i> é constituído por 09 peças que exemplificam aspectos das práticas de ensino vivenciadas no século XIX. É demonstrado como crianças e jovens, especialmente meninas, aprendiam a leitura e a escrita. A seção <i>Escritas íntimas</i> apresenta 14 artefatos que remetem ao modo como o sexo feminino se apropriava da escrita para registrar a vida cotidiana e as efemérides que compunham sua existência, além de livros e álbuns que colecionavam ao longo da vida. A categoria <i>Toaletes femininas </i> é composta por 43 objetos que remetem ao dia a dia e a intimidade das mulheres no Oitocentos. O conjunto aborda hábitos de higiene, modos de vestir, trabalho e governança do lar entre outros aspectos. Em <i>Imagens sensíveis </i> são apresentadas 04 peças que abarcam situações como luto, religiosidade e memórias familiares presentes nos álbuns fotográficos. </Paragraph>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph >
                        Para cada um dos 70 itens da Exposição "Mulheres e educação no século XIX: artefatos e sensibilidades”, foi elaborado um verbete escrito por pesquisadores, docentes e pós-graduandos com produção acadêmica na área de História da Educação. Os textos têm por característica demonstrar como tais objetos se faziam presente no cotidiano feminino do século XIX.
                    </Paragraph>
                    <ImagesBox>
                        <Image width={'500px'} big alone image={images[6].url}/>
                    </ImagesBox>
                    <Paragraph>
                        A Exposição insere-se no campo da história das mulheres, mais propriamente à história da educação feminina, à medida que permite um conhecimento mais próximo da intimidade de personagens até então silenciadas, evidenciando um universo, nos quais, muitas vezes, os objetos expostos constituíam os singulares elementos do cenário em que se desenrolou suas vidas, em meio a crenças, desejos, anseios e contradições (PERROT, 2005). Pretende-se, assim, expor as mulheres na cena oitocentista, trazendo um recorte de gênero para o espaço cultural/expositivo, priorizando-se vestígios da cotidianidade feminina.
                    </Paragraph>
                    <ImageTextBox>
                        {renderImages(7,8,9,10,11)}
                        <ParagraphBox>
                            <Paragraph>
                                Para tanto, a Exposição "Mulheres e educação no século XIX: artefatos e sensibilidades” possui um acervo integralmente dedicado a elas, acrescido da elaboração de referências que remetem ao seu protagonismo. Além disso, a Exposição demonstra a importância de guardar, mostrar, relembrar, preservar aquilo que, durante tanto tempo, foi unicamente permitido como parte da vida de mulheres.

                            </Paragraph>
                        </ParagraphBox>
                    </ImageTextBox>
                </Box>
                <Box hasPaddingTop>

                </Box>
            </Page>
        )
    }




    // useEffect(() => {}, [page])
    return (
        <Wrapper>
            <Box hasPaddingTop>
                <Title>Apresentação  </Title>
            </Box>
            {renderText()}
        </Wrapper>
    )
}

export default Apresentation