import  React, {useState, useEffect} from "react"
import styled, {keyframes} from "styled-components"

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
`;

const Box = styled.div`
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    color:#5F1478;
    padding-top: ${({ hasPaddingTop }) => hasPaddingTop ? '50px' : '0'};
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

const PaginationBox = styled.div`
    width: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);

`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => active ? '#5F1478' : 'transparent'};
    border: 1px solid #5F1478;
    cursor: pointer;

`;

const Page = styled.div`
    width: 100%;
    padding: 0 126px;
    margin: 0 auto;
    animation: ${({ hasAnimation, direction}) => hasAnimation ? direction === 1 ? pageAnimation: reversePageAnimation : 'none' } 1.2s ease-in-out;
    position: relative;

    ${({isFlex}) => isFlex && `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
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
    margin-right: 48px;
    position: relative;


    @media (max-width: 1365px) {
        width: 100%;
    }
    
`;

const SmallImagesBox = styled.div`
    width: 47.5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
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
    font-size: 18px;
    line-height: 1.5;
    color:#5F1478;

    ${({ firstLetterThemed }) => firstLetterThemed && `
           ::first-letter {
        font-size: 60px;
        color: #AE276F;
        line-height: 1;
    }
    `}

    ${({ firstLineThemed }) => firstLineThemed && `

    ::first-line {
        font-size: 18px;
        font-weight: bold;
        color: #AE276F;
        line-height: 1;

    }
    `}
`;

const Image = styled.div`
    width: ${({ width }) => width};
    height: ${({ big }) => big ? "280px" : "120px"};
    background-color: gray;
    border-radius: 4px;
    margin-top: ${(hasMarginTop) => hasMarginTop ? "20px" : "0"};
    margin-bottom: ${(hasMarginBottom) => hasMarginBottom ? "20px" : "0px"};
`;

const NextBtn = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 50%;
    display: ${({ isVisible }) => isVisible ? "block" : "none"};
    background: transparent;

    ::after{
        content: '';
        width: 60px;
        height: 60px;
        background-image: url(${rightArrow});
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
    }


    @media (max-width: 1365px) {
        top: 490px;
        right: 50px
    }
`;

const BackBtn = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    cursor: pointer;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: rotate(180deg) translateY(-5px);
    display: ${({ isVisible }) => isVisible ? "block" : "none"};
    background: transparent;

    ::after{
        content: '';
        width: 60px;
        height: 60px;
        background-image: url(${rightArrow});
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (max-width: 1365px) {
        top: 490px;
        right: 50px
    }
`;

const array = [1, 2, 3, 4, 5]

const Apresentation = () => {

    const [page, setPage] = useState(1);
    const [direction, setDirection] = useState(1);
    const firstPage = 1;
    const lastPage = 2;

    const renderImages = () => {
        return (
            <ImagesBox>
                <Image width="260px" big />
                <SmallImagesBox>
                    {array.map((item, index) => {
                        if (index !== 0) {
                            return <Image key={index} width={'120px'} hasMarginBottom={(index === 1) || (index === 2)} />
                        }

                        return null
                    })}
                </SmallImagesBox>
            </ImagesBox>
        )
    }

    const renderButtons = () => {

        const handleNext = () => {
            setDirection(1);
            setPage(page + 1);
        }
    
        const handleBack = () => {
           setDirection(2)
            setPage(page -1);
        }
    

        return (
            <>
                <NextBtn  isVisible={page !== lastPage} onClick={handleNext} />
                <BackBtn isVisible={!(page === firstPage)}  onClick={handleBack}/>
            </>
        )
    }

    const page1 = () => {
        console.log(page)
        return (
            <Page hasAnimation={page === 1}  key={Math.random()} direction={direction} >
                  {renderButtons()}
            <ImageTextBox>
                <ParagraphBox>
                    <Paragraph firstLineThemed firstLetterThemed >A exposição tem como patrocinadora a Fundação de Amparo à Pesquisa do Estado do Rio de Janeiro – FAPERJ, por meio do Programa de Apoio à Organização de Eventos Científicos,
                        Tecnológicos e de Inovação no RJ. As peças apresentadas nesta Exposição pertencem a coleções particulares cedidas ao Nhempe, exibidas pela primeira vez ao público.
                        Destaca-se, em grande parte do acervo, a Coleção “As Franciscas”, cujas peças originais do século XIX, possuem documentação de autenticidade e de valoração, tendo sido
                        reunidas ao longo de anos, por meio da aquisição em leilões e antiquários.
                        As imagens da Coleção foram cedidas ao Nhempe para esta Exposição temporária, bem como para a elaboração do Catálogo impresso com parte das peças apresentadas.
                    </Paragraph>
                </ParagraphBox>
                {renderImages()}
            </ImageTextBox>
            <Box>
                <Paragraph firstLetterThemed >
                    O objetivo da Exposição <b>"Mulheres e educação no século XIX: artefatos e sensibilidades”</b> é apresentar um acervo inédito de objetos e materiais de escrita originais do século XIX, sensíveis à utilização feminina, em um mundo regido pelo masculino. A finalidade da Exposição é oferecer um mosaico de artefatos que remetem à mulher, com seus conceitos e usos cotidianos descritos em verbetes, entre eles, notadamente, àqueles relacionados à educação e à toalete feminina, característicos da concepção do que era apropriado à elas, em um tempo e contexto monarquista, patriarcal e estratificado socialmente. O material exposto reúne um acervo de 70 peças classificadas em quatro categorias: Cenários educativos; Escritas íntimas; Toaletes femininas e Imagens sensíveis.

                </Paragraph>
            </Box>
        </Page>
        )
    }

    const page2 = () => {
        return (
            <Page hasAnimation={page === 2} isFlex key={Math.random()}  direction={direction}>
                   {renderButtons()}
                <Paragraph firstLetterThemed firstLineThemed> O objetivo da Exposição "Mulheres e educação no século XIX: artefatos e sensibilidades” é apresentar um acervo inédito de objetos e materiais de escrita originais do século XIX, sensíveis à utilização feminina, em um mundo regido pelo masculino. A finalidade da Exposição é oferecer um mosaico de artefatos que remetem à mulher, com seus conceitos e usos cotidianos descritos em verbetes, entre eles, notadamente, àqueles relacionados à educação e à toalete feminina, característicos da concepção do que era apropriado à elas, em um tempo e contexto monarquista, patriarcal e estratificado socialmente. O material exposto reúne um acervo de 70 peças classificadas em quatro categorias: Cenários educativos; Escritas íntimas; Toaletes femininas e Imagens sensíveis.</Paragraph>
                <Image width={'500px'} big />
                <Paragraph firstLetterThemed >O eixo Cenários educativos é constituído por 09 peças que exemplificam aspectos das práticas de ensino vivenciadas no século XIX. É demonstrado como crianças e jovens, especialmente meninas, aprendiam a leitura e a escrita. A seção Escritas íntimas apresenta 14 artefatos que remetem ao modo como o sexo feminino se apropriava da escrita para registrar a vida cotidiana e as efemérides que compunham sua existência, além de livros e álbuns que colecionavam ao longo da vida. A categoria Toaletes femininas é composta por 43 objetos que remetem ao dia a dia e a intimidade das mulheres no Oitocentos. O conjunto aborda hábitos de higiene, modos de vestir, trabalho e governança do lar entre outros aspectos. Em Imagens sensíveis são apresentadas 04 peças que abarcam situações como luto, religiosidade e memórias familiares presentes nos álbuns fotográficos. </Paragraph>
            </Page>
        )
    }


    const renderPage = (page) => {
        switch (page) {
            case 1:
                return page1()
            case 2:
                return page2()
            default:
                setPage(1)
                return page1()
        }
    }

    // useEffect(() => {}, [page])
    return (
        <Wrapper>
         
            <Box hasPaddingTop>
                <Title>Apresentação  </Title>
                <PaginationBox>
                    <Circle active={page === 1} onClick={() => setPage(1)} />
                    <Circle active={page === 2} onClick={() => setPage(2)} />
                </PaginationBox>
            </Box>
           {renderPage(page)}
        </Wrapper>
    )
}

export default Apresentation