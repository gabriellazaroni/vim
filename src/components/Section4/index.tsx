import {
  Android,
  Apple,
  AppleAndroidLink,
  Container,
  ContentContainer,
  DownloadContainer,
  MobileContainer,
  MobileImg,
  Text,
  Title,
  TitleContainer,
} from './styles'

import apple from '../../assets/apple.svg'
import android from '../../assets/android.svg'
import mobile from '../../assets/mobile.svg'

export function Section4() {
  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <Title>
            Venha apreciar o melhor da <br /> gastronomia, com os melhores
            preços
          </Title>
          <Text>
            Desfrute de uma experiência gastronômica deliciosa e acessível em
            nosso <br /> aplicativo. Explore uma ampla seleção de restaurantes
            com pratos <br /> irresistíveis que não pesam no seu bolso.
            Satisfaça seu paladar sem <br /> comprometer o seu orçamento!
          </Text>
        </TitleContainer>
        <DownloadContainer>
          <AppleAndroidLink>
            <Apple src={apple} />
          </AppleAndroidLink>
          <AppleAndroidLink>
            <Android src={android} />
          </AppleAndroidLink>
        </DownloadContainer>
      </ContentContainer>
      <MobileContainer>
        <MobileImg src={mobile} />
      </MobileContainer>
    </Container>
  )
}
