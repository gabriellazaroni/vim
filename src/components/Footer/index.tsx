import {
  CompanyImgContainer,
  ContactItenList,
  ContactUl,
  Container,
  ContentContainer,
  HomeCompanyContainer,
  HomeCompanyUl,
  ItenList,
  ItenListContactContainer,
  ItenListContainer,
  Li,
  Logo,
  LogoContainer,
  SocialMediaImg,
  SocialMediaImgLink,
  SocialMediaLink,
  TitleList,
} from './styles'
import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'

export function Footer() {
  return (
    <Container id="home">
      <LogoContainer>
        <SocialMediaImgLink href="#top">
          <Logo src={logo} alt="logo" />
        </SocialMediaImgLink>
      </LogoContainer>
      <ContentContainer>
        <ContactUl>
          <ItenListContactContainer>
            <Li>
              <ContactItenList>www.companyname.com</ContactItenList>
            </Li>
            <Li>
              <ContactItenList>companyname@gmail.com</ContactItenList>
            </Li>
            <Li>
              <ContactItenList>Phone: +7 485-118-03-25</ContactItenList>
            </Li>
          </ItenListContactContainer>
        </ContactUl>
        <HomeCompanyContainer>
          <HomeCompanyUl>
            <TitleList>Home</TitleList>
            <ItenListContainer>
              <Li>
                <ItenList>Landingpage</ItenList>
              </Li>
              <Li>
                <ItenList>Documentation</ItenList>
              </Li>
              <Li>
                <ItenList>Referral Program</ItenList>
              </Li>
              <Li>
                <ItenList>UI & UX Design</ItenList>
              </Li>
              <Li>
                <ItenList>Web Design</ItenList>
              </Li>
            </ItenListContainer>
          </HomeCompanyUl>
          <HomeCompanyUl>
            <TitleList>Company</TitleList>
            <ItenListContainer>
              <Li>
                <ItenList>Landingpage</ItenList>
              </Li>
              <Li>
                <ItenList>Documentation</ItenList>
              </Li>
              <Li>
                <ItenList>Referral Program</ItenList>
              </Li>
              <CompanyImgContainer>
                <SocialMediaLink href="">
                  <SocialMediaImg src={instagram} alt="intagram logo" />
                </SocialMediaLink>
                <SocialMediaLink href="">
                  <SocialMediaImg src={facebook} alt="facebook logo" />
                </SocialMediaLink>
                <SocialMediaLink href="">
                  <SocialMediaImg src={twitter} alt="twitter logo" />
                </SocialMediaLink>
                <SocialMediaLink href="">
                  <SocialMediaImg src={youtube} alt="youtube logo" />
                </SocialMediaLink>
              </CompanyImgContainer>
            </ItenListContainer>
          </HomeCompanyUl>
        </HomeCompanyContainer>
      </ContentContainer>
    </Container>
  )
}
