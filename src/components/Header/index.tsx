import {
  Container,
  HeaderContainer,
  LeftContainer,
  LoginButton,
  LoginContainer,
  Logo,
  TextContainer,
  TextNav,
  TextNavHome,
} from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer id="top">
      <Container>
        <LeftContainer>
          <Logo src={logo} alt="logo" />
          <TextContainer>
            <TextNavHome>Home</TextNavHome>
            <TextNav href="#home">Contato</TextNav>
          </TextContainer>
        </LeftContainer>
        <LoginContainer>
          <LoginButton>Login</LoginButton>
        </LoginContainer>
      </Container>
    </HeaderContainer>
  )
}
