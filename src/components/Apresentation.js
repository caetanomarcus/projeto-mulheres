import React from "react"
import styled, { keyframes } from "styled-components"
import { images } from "../data/images";
import { useNavigate } from "react-router-dom";


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

    @media (max-width: 768px) {
        padding-top: ${({ hasPaddingTop }) => hasPaddingTop ? '16px' : '0'};
    }
    
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
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ButtonToInfos = styled.button`
    border: solid 1px #5F1478;
    padding: 14px;
    border-radius: 4px;
    background-color: transparent;
    color:#5F1478;
    font-size: 16px;
    cursor: pointer;
    margin-right: 16px;

    :hover {
        background-color: #5F1478;
        color: #fff;

    }

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 16px;
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
    margin-top: 62px;
    margin-bottom: 62px;


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

const MembersBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;


    @media (max-width: 768px) {
        padding: 24px 32px;
    }
`;

const RodaPeBox = styled.div`
    width: calc(100% - 352px);
    border-top: solid #000 1px;
    padding: 26px;
    margin: 0 auto;
    margin-top: 40px;

    @media (max-width: 1024px) {
        width: calc(100% - 64px);
    }
`;

const Rodape = styled.p`
    margin-bottom: 6px;
    font-size: 12px;

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const Apresentation = () => {

    const navigate = useNavigate();

    const renderImages = (big, first, second, third, fourth) => {
        const lista = [images[first], images[second], images[third], images[fourth]];
        console.log(lista, 'lista', first, second, third, fourth);
        return (
            <ImagesBox>
                <Image width="50%" big image={images[big]?.url} />
                <SmallImagesBox>
                    {lista.map((item, index) => {

                        return <Image key={index} width={'40%'} image={item?.url} />

                    })}
                </SmallImagesBox>
            </ImagesBox>
        )
    }

    const renderText = () => {

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
                        <Image width={'500px'} big alone image={images[6].url} />
                    </ImagesBox>
                    <Paragraph>
                        A Exposição insere-se no campo da história das mulheres, mais propriamente à história da educação feminina, à medida que permite um conhecimento mais próximo da intimidade de personagens até então silenciadas, evidenciando um universo, nos quais, muitas vezes, os objetos expostos constituíam os singulares elementos do cenário em que se desenrolou suas vidas, em meio a crenças, desejos, anseios e contradições (PERROT, 2005)¹. Pretende-se, assim, expor as mulheres na cena oitocentista, trazendo um recorte de gênero para o espaço cultural/expositivo, priorizando-se vestígios da cotidianidade feminina.
                    </Paragraph>
                    <ImageTextBox>
                        {renderImages(7, 8, 9, 10, 11)}
                        <ParagraphBox>
                            <Paragraph>
                                Para tanto, a Exposição "Mulheres e educação no século XIX: artefatos e sensibilidades” possui um acervo integralmente dedicado a elas, acrescido da elaboração de referências que remetem ao seu protagonismo. Além disso, a Exposição demonstra a importância de guardar, mostrar, relembrar, preservar aquilo que, durante tanto tempo, foi unicamente permitido como parte da vida de mulheres.

                            </Paragraph>
                        </ParagraphBox>
                    </ImageTextBox>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph >
                        Nessa perspectiva, a Exposição volta-se para elementos do passado feminino brasileiro no Oitocentos, buscando uma valorização da história de mulheres, por vezes, propositalmente silenciada e esquecida, deixando-as órfãs de seus próprios símbolos e signos característicos de uma época (RICOEUR, 2007)² .
                    </Paragraph>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph>
                        Além disso, essa narrativa expográfica demonstra o que as mulheres foram, o que elas têm feito através dos tempos e como isso repercute no que elas estão fazendo agora, denotando as camadas de passado que possui o presente (KOSELLECK, 2014)³.
                    </Paragraph>
                    <ImagesBox >
                        <Image width={'500px'} big alone image={images[45].url} />
                    </ImagesBox>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph>
                        Assim, a Exposição é também apresentada como um exemplo de transferência de conhecimento do patrimônio histórico educacional para a comunidade. Os objetos expostos não têm voz, mas através dos verbetes, o visitante poderá encontrar respostas para suas dúvidas em relação a tais peças. Nesse sentido, comunicamos e oferecemos a sociedade o conhecimento gerado a partir do grupo de pesquisa, viabilizados por meio desta Exposição "Mulheres e educação no século XIX:<i>artefatos e sensibilidades</i> ”.
                    </Paragraph>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph>
                        Desejamos que você, visitante, desfrute das imagens e das narrativas que emanam dos artefatos e verbetes apresentados!
                    </Paragraph>
                </Box>
            </Page>
        )
    }

    const renderMembers = () => {

        return (
            <MembersBox>
                <Box hasPaddingTop>
                    <Paragraph><b>Coordenação Geral da Exposição</b></Paragraph>
                    <Paragraph>Diogo dos Santos Silva (UERJ)</Paragraph>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph><b>Curadores:</b></Paragraph>
                    <Paragraph>Maria Celi Chaves Vasconcelos (UERJ)</Paragraph>
                    <Paragraph>Pablo Álvarez Domínguez (Universidade de Sevilha – ES)</Paragraph>
                    <Paragraph>Alexandra Lima da Silva (UERJ)</Paragraph>
                    <Paragraph>Ana Cristina B. Lopez M. Francisco (UERJ)</Paragraph>
                    <Paragraph>Luciana Borges Patroclo (UERJ)</Paragraph>
                </Box>
                <Box hasPaddingTop>
                    <Paragraph><b>Curadora convidada:</b></Paragraph>
                    <Paragraph>Cláudia Gonçalves de Lima (UERJ)</Paragraph>
                </Box>
            </MembersBox>
        )
    }




    // useEffect(() => {}, [page])
    return (
        <Wrapper>
            <ButtonContainer>
                <ButtonToInfos onClick={() => navigate("/infos")}  >Veja nossa programação</ButtonToInfos>
                <ButtonToInfos onClick={() => navigate("/exposicao")}  >Veja nossa exposição</ButtonToInfos>
            </ButtonContainer>
            <Box hasPaddingTop>
                <Title>Apresentação  </Title>
            </Box>
            {renderText()}
            {renderMembers()}
            <RodaPeBox>
                <Rodape>¹ PERROT, Michelle. As mulheres ou os silêncios da história. Bauru: EDUSC, 2005.</Rodape>
                <Rodape>² RICOEUR, Paul. A memória, a história, o esquecimento. Campinas: Editora da Unicamp, 2007.</Rodape>
                <Rodape>³  KOSELLECK, R. Estratos do tempo. Estudos sobre história. Rio de Janeiro: Contraponto; Editora PUC-Rio, 2014.</Rodape>
            </RodaPeBox>
        </Wrapper>
    )
}

export default Apresentation