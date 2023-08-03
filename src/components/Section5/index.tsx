import {
  Contact,
  Container,
  Form,
  Input,
  InputButton,
  Title,
  TitleContainer,
} from './styles'

export function Section5() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <Container>
      <TitleContainer>
        <Contact>CONTATO</Contact>
        <Title>
          Dúvidas sobre nosso negócio ? <br /> Entre em contato agora.
        </Title>
      </TitleContainer>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="email" placeholder="Digite sua menssagem" />
        <InputButton type="submit" name="submit" value="Enviar" />
      </Form>
    </Container>
  )
}
