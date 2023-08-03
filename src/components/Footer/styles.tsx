import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--gray-500);
`

export const LogoContainer = styled.div`
  display: flex;
  @media (max-width: 886px) {
    justify-content: center;
  }
`

export const Logo = styled.img`
  display: block;
  margin-left: 185px;
  @media (max-width: 886px) {
    margin-left: 0px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
  padding: 140px 140px 80px 140px;
  @media (max-width: 886px) {
    justify-content: center;
  }
`

export const ContactUl = styled.ul`
  list-style: none;
  justify-content: end;
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
`

export const HomeCompanyContainer = styled.div`
  display: flex;
  gap: 89px;
`

export const HomeCompanyUl = styled.ul`
  list-style: none;
`

export const Li = styled.li``

export const ItenListContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: end;
  @media (max-width: 886px) {
    text-align: center;
  }
`

export const ItenListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 26px;
  @media (max-width: 886px) {
    text-align: center;
  }
`

export const TitleList = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-md);
  color: var(--white);
  @media (max-width: 886px) {
    text-align: center;
  }
`

export const ContactItenList = styled.a`
  font-size: var(--font-xs);
  color: var(--gray-400);
  white-space: nowrap;
`

export const ItenList = styled.a`
  font-size: var(--font-xs);
  color: var(--gray-400);
  white-space: nowrap;
  cursor: pointer;
`

export const CompanyImgContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SocialMediaLink = styled.a`
  width: 100%;
  display: block;
`

export const SocialMediaImgLink = styled.a``

export const SocialMediaImg = styled.img`
  width: 100%;
  display: block;
  cursor: pointer;
`
