import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 150px;
  flex-direction: column;
  padding: 0px 150px 0px 150px;
  @media (max-width: 1190px) {
    padding: 0px 20px 0px 20px;
  }
  @media (max-width: 985px) {
    margin-top: 100px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 675px) {
    text-align: center;
  }
`

export const Title = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-xl);
  font-weight: 700;
`

export const ContentContainer = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 112px;
  @media (max-width: 610px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
  }
  @media (max-width: 850px) {
    margin-top: 15px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;
  @media (max-width: 680px) {
    gap: 16px;
  }
`

export const Img = styled.img`
  display: block;
  width: 88px;
  height: 88px;
  @media (max-width: 720px) {
    width: 66px;
    height: 66px;
  }
`

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (max-width: 850px) {
    gap: 10px;
  }
`

export const TitleContent = styled.div`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-l);
  font-weight: 700;
  @media (max-width: 568px) {
    text-align: center;
  }
`

export const TextContent = styled.p`
  font-size: var(--font-sm);
  font-weight: 400;
  text-align: center;
  color: #5b554d;
`
