import {
  Container,
  TextLegend,
  TextLegendContainer,
  TextTitle,
  TextTitleContainer,
} from './styles'

export function Main() {
  return (
    <Container>
      <TextTitleContainer>
        <TextTitle>
          Junte-se a nós e impulsione seu <br /> estabelecimento com nosso
          aplicativo,
          <br />
          alcançando uma audiência ávida por <br /> novas experiências
          gastronômicas.
        </TextTitle>
        <TextLegendContainer>
          <TextLegend>
            Atraia clientes com um toque de elegância e diversão, tornando seu
            estabelecimento um lugar irresistível para todos.
          </TextLegend>
        </TextLegendContainer>
      </TextTitleContainer>
    </Container>
  )
}
