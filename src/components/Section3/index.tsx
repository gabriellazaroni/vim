import {
  Button,
  ButtonContainer,
  CardContainer,
  CardTitle,
  Container,
  ContentContainer,
  FoodImg,
  FoodImgContainer,
  ListFoodContainer,
  StarsImg,
  StarsImgContainer,
  Text,
  TitileContainer,
  Title,
} from './styles'

import chicken from '../../assets/chicken.svg'
import salad1 from '../../assets/salad1.svg'
import hamburger from '../../assets/hamburger.svg'
import salad2 from '../../assets/salad2.svg'
import egg from '../../assets/egg.svg'
import salad3 from '../../assets/salad3.svg'
import stars from '../../assets/stars.svg'

export function Section3() {
  return (
    <Container>
      <TitileContainer>
        <Title>Gastronomia para todos os gostos</Title>
        <Text>
          De sabores tradicionais a surpresas gastronômicas, nosso aplicativo
          oferece opções para todos os paladares. Descubra um mundo de variedade
          culinária, onde cada prato é uma experiência única e irresistível.
        </Text>
      </TitileContainer>

      <ListFoodContainer>
        <CardContainer>
          <FoodImgContainer>
            <FoodImg src={chicken} alt="carne branca assada" />
          </FoodImgContainer>
          <ContentContainer>
            <CardTitle>Carne branca</CardTitle>
            <StarsImgContainer>
              <StarsImg src={stars} alt="cinco estrelas" />
            </StarsImgContainer>
          </ContentContainer>
        </CardContainer>

        <CardContainer>
          <FoodImgContainer>
            <FoodImg src={salad1} alt="salada" />
          </FoodImgContainer>
          <ContentContainer>
            <CardTitle>Salada</CardTitle>
            <StarsImgContainer>
              <StarsImg src={stars} alt="cinco estrelas" />
            </StarsImgContainer>
          </ContentContainer>
        </CardContainer>

        <CardContainer>
          <FoodImgContainer>
            <FoodImg src={hamburger} alt="hamburger" />
          </FoodImgContainer>
          <ContentContainer>
            <CardTitle>Hambúrguer</CardTitle>
            <StarsImgContainer>
              <StarsImg src={stars} alt="cinco estrelas" />
            </StarsImgContainer>
          </ContentContainer>
        </CardContainer>

        <CardContainer>
          <FoodImgContainer>
            <FoodImg src={salad2} alt="bife delmonico" />
          </FoodImgContainer>
          <ContentContainer>
            <CardTitle>Bife Delmonico</CardTitle>
            <StarsImgContainer>
              <StarsImg src={stars} alt="cinco estrelas" />
            </StarsImgContainer>
          </ContentContainer>
        </CardContainer>

        <CardContainer>
          <FoodImgContainer>
            <FoodImg src={egg} />
          </FoodImgContainer>
          <ContentContainer>
            <CardTitle>Ovo Masala</CardTitle>
            <StarsImgContainer>
              <StarsImg src={stars} alt="cinco estrelas" />
            </StarsImgContainer>
          </ContentContainer>
        </CardContainer>

        <CardContainer>
          <FoodImgContainer>
            <FoodImg src={salad3} />
          </FoodImgContainer>
          <ContentContainer>
            <CardTitle>Peach Melba</CardTitle>
            <StarsImgContainer>
              <StarsImg src={stars} />
            </StarsImgContainer>
          </ContentContainer>
        </CardContainer>
      </ListFoodContainer>
      <ButtonContainer>
        <Button>Experimentar agora</Button>
      </ButtonContainer>
    </Container>
  )
}
