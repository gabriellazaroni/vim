import {
  Container,
  ContentContainer,
  DetailsContainer,
  Img,
  TextContent,
  Title,
  TitleContainer,
  TitleContent,
  TitleTextContainer,
} from './styles'
import house from '../../assets/house.svg'
import smile from '../../assets/smile.svg'

export function Section1() {
  return (
    <Container>
      <TitleContainer>
        <Title>Comida com uma nova paixão</Title>
      </TitleContainer>
      <ContentContainer>
        <DetailsContainer>
          <Img src={house} alt="icone casa" />
          <TitleTextContainer>
            <TitleContent>Comida de qualidade</TitleContent>
            <TextContent>
              Descubra uma experiência gastronômica <br /> excepcional em nossos
              restaurantes <br /> selecionados. Delicie-se com pratos de <br />
              qualidade, cuidadosamente preparados <br /> por chefs talentosos,
              e aproveite cada <br /> mordida em um ambiente acolhedor e <br />
              sofisticado.
            </TextContent>
          </TitleTextContainer>
        </DetailsContainer>
        <DetailsContainer>
          <Img src={smile} alt="icone rosto feliz" />
          <TitleTextContainer>
            <TitleContent>Sabor indescritível</TitleContent>
            <TextContent>
              Descubra o sabor indescritível que vai <br /> encantar o seu
              paladar. Uma experiência <br /> gastronômica única que vai te{' '}
              <br />
              surpreender a cada mordida
            </TextContent>
          </TitleTextContainer>
        </DetailsContainer>
      </ContentContainer>
    </Container>
  )
}
