import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header.2";
import { images } from "../data/images";

//images
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";
import Footer from "../components/Footer";

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
`;

const FilterContainer = styled.div`
    width: fit-content;
    /* padding: 0 176px; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #f0f0f0;
    position: absolute;
    right: 176px;
    z-index: 3;

    @media (max-width: 1024px){
        right: 32px;
    }
    
`;

const FiltersBox = styled.div`
        display: none;
        width: 100%;
        /* position: absolute;
        left: 10px; */
`;

const Filter = styled.div`
    width: 80px;
    height: 32px;
    border: #fff solid 1px;
    border-radius: 4px;
    color:#5F1478;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 5px 10px;
    cursor: pointer;
    transition:  .8s;
    position: relative;
    overflow: hidden;




    :hover {
        width: 240px;
        height: 210px;
        
        ${FiltersBox}{
            display: block;
        }
        
    }
`;

const Label = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
`;

const Text = styled.p`
    font-size: 14px;
    
`;

const Swtich = styled.label`
    position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
  

  input {
    opacity: 0;
  width: 0;
  height: 0;
  }
`;

const SliderRound = styled.span`
     position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #7e0afa12;
  -webkit-transition: .4s;
  transition: .4s;
     border-radius: 34px;

     ::before{
        position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border: solid  1px #7e0afa;
  -webkit-transition: .4s;
  transition: .4s;
border-radius: 50%;
     }
`;

const Checkbox = styled.input`

    :checked + ${SliderRound} {
        background-color: #5F1478;
    }

    :focus + ${SliderRound} {
        box-shadow: 0 0 1px #5F1478;
    }

    :checked + ${SliderRound}:before {
        -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }


`;

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
`;

const PaginationBox = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        width: 50%;
    }
`;

const PaginationButton = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;


    :focus {
        outline: none;
    }

    ::after{
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background-image: url(${props => props.icon});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const ImagesContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 176px;
    margin-top: 16px;

    @media (max-width: 1024px) {
        padding: 0 32px;
        
    }
    `;

const ImgContainer = styled.div`
width: 100%;
height: fit-content;
/* background-image: ${props => `url(${props.src})`};
background-size: cover;
background-position: center; */
cursor: pointer;
position: relative;

:hover {
    filter: grayscale(100%) brightness(70%) sepia(20%) hue-rotate(-100deg) saturate(500%) contrast(1);


    div{
        display: flex;
    }
}

${({haveNoImages}) => haveNoImages && `
    background-color: #f0f0f0;
    opacity: 0.5;
    height:  60px;
`}

`;

const Blur = styled.div`
    display: none;
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -5px);
    background-color: #00000030;
    backdrop-filter: blur(5px);
    /* border-radius: 8px 8px 0 0; */
`;

const Anchor = styled.a`
         width: 30%;
        height: fit-content;
        margin: 0 8px;
        position: relative;
        margin-bottom: 2%;

        :hover {
            p {
                display: block;
            }

            ${ImgContainer}{
                filter: grayscale(100%) brightness(70%) sepia(20%) hue-rotate(-100deg) saturate(500%) contrast(1);
            }

            ${Blur}{
                display: block;
            }
        }

        @media (max-width: 480px) {  
        width: 50%;
        
        }
    `;


const Img = styled.img`
    width: 100%;

    
    cursor: pointer;

    :hover {
        /* opacity: 0.5; */
        /* border: solid 1px #000; */
        
    }
`;



const Name = styled.p`
    display: none;
    width: fit-content;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

`;

//categorys 0 = Cenários Educativos, 1 = Escritas Íntimas, 2 = Toaletes Femininas, 3 = Imagens Sensíveis

const Exposicao = () => {
    const [categorys, setCategorys] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filteredImages, setFilteredImages] = useState([]);


    const renderSwtichCheckbox = (label, position) => {

        const handleChange = (e) => {

            if (categorys.includes(position)) {
                const newArray = categorys.filter(item => item !== position);
                setCategorys(newArray);
                setPage(1);
                setOffset(0);
                setLimit(10);
            } else {
                setCategorys([...categorys, position]);
                setPage(1);
                setOffset(0);
                setLimit(10);
            }

        }

        return (
            <Label>
                <Text>{label}</Text>
                <Swtich>
                    <Checkbox type="checkbox" onChange={handleChange} />
                    <SliderRound />
                </Swtich>
            </Label>
        )
    }

    const renderImages = () => {
       
        const array = filteredImages.slice(offset,limit).map((image) => (
            <Anchor key={image.id} href={"/exposicao/" + image.id} >
                <Name>{image.name}</Name>
                <ImgContainer haveNoImages={!image.url}>
                    <Img src={image.url} alt={image.name} />
                    <Blur />
                </ImgContainer>
            </Anchor>
        ))

        return array
    }

 
    const totalPages = (filteredImages.length %10 === 0 )? filteredImages.length/10 : Math.floor(filteredImages.length/10) + 1;


    const handleClickNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
            setLimit(limit + 10);
            setOffset(offset + 10);
        }
    }

    const handleClickPrev = () => {
        if (page > 1) {
            setPage(page - 1);
            setLimit(limit - 10);
            setOffset(offset - 10);
        }
    }

    useEffect(() => {
     const array =   images.filter(image => {
            const { category } = image;
    
            if (categorys.length === 0) {
                return true;
            }
    
            return categorys.includes(category);
        })

        setFilteredImages(array);
    }, [page, categorys]);

    return (
        <Container>
            <Header />
            <FilterContainer>
                <Filter>
                    <p>Filtros</p>
                    <FiltersBox>
                        {renderSwtichCheckbox("Cenários Educativos", 0)}
                        {renderSwtichCheckbox("Escritas Íntimas", 1)}
                        {renderSwtichCheckbox("Toaletes Femininas", 2)}
                        {renderSwtichCheckbox("Imagens Sensíveis", 3)}
                    </FiltersBox>
                </Filter>
            </FilterContainer>
            <PaginationContainer>
                <PaginationBox>
                    <PaginationButton icon={leftArrow} onClick={handleClickPrev} />
                    <p>Página {page} de {totalPages}</p>
                    <PaginationButton icon={rightArrow} onClick={handleClickNext} />
                </PaginationBox>
            </PaginationContainer>
            <ImagesContainer>
                {renderImages()}
            </ImagesContainer>
            <Footer />
        </Container>
    )
}

export default Exposicao;