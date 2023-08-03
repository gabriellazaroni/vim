import {
  Button,
  Container,
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  Img,
  ImgContainer,
} from './styles'
import woman from '../../assets/woman.svg'

export function Section2() {
  return (
    <Container>
      <ImgContainer>
        <Img src={woman} alt="mulher" />
      </ImgContainer>
      <DescriptionContainer>
        <DescriptionTitle>
          Descubra o poder de estar ao alcance de todos os amantes da boa
          gastronomia.
        </DescriptionTitle>
        <DescriptionText>
          Leve o seu restaurante para o próximo nível com o nosso aplicativo.
          Aumente a sua visibilidade, conquiste novos clientes e desfrute do
          sucesso que você merece.
        </DescriptionText>
        <Button>Registrar</Button>
      </DescriptionContainer>
    </Container>
  )
}
