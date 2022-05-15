import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header.2";
import { images } from "../data/images";

const Container = styled.div`
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



const ImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 176px;
    margin-top: 60px;

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

const VerMais = styled.button`
    width: fit-content;
    height: fit-content;
    border: solid #3c3c3c;
    border-radius: 4px;
    background-color: #fff;
    margin: 0 auto;
`;
//categorys 0 = Cenários Educativos, 1 = Escritas Íntimas, 2 = Toaletes Femininas, 3 = Imagens Sensíveis

const Exposicao = () => {
    const [categorys, setCategorys] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);

    const renderSwtichCheckbox = (label, position) => {

        const handleChange = (e) => {

            if (categorys.includes(position)) {
                const newArray = categorys.filter(item => item !== position);
                setCategorys(newArray);
            } else {
                setCategorys([...categorys, position]);
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
        const filteredImages = images.filter(image => {
            const { category } = image;

            if (categorys.length === 0) {
                return true;
            }

            return categorys.includes(category);
        });


        return filteredImages.slice(offset,limit).map((image) => (
            <Anchor key={image.id} href={"/exposicao/" + image.id} >
                <Name>{image.name}</Name>
                <ImgContainer src={image.src}>
                    <Img src={image.url} alt={image.name} />
                    <Blur />
                </ImgContainer>
            </Anchor>
        ))
    }

    const handleClickVerMais = () => {
        setOffset(offset + limit);
    }

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
            <ImagesContainer>
                {renderImages()}
            </ImagesContainer>
            <VerMais>Ver mais</VerMais>
        </Container>
    )
}

export default Exposicao;