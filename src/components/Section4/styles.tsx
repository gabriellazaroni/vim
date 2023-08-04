import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--gray-100);
  gap: 100px;
  margin-top: 187px;
  max-height: 518px;
  @media (max-width: 985px) {
    margin-top: 50px;
    height: 400px;
  }
  @media (max-width: 495px) {
    height: 300px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 980px) {
    padding: 0px 20px 0px 20px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 985px) {
    text-align: center;
  }
`

export const Title = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-l);
  font-weight: 700;
`

export const Text = styled.p`
  font-size: var(--font-sm);
  font-weight: 400;
  color: #5b554d;
`

export const DownloadContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const AppleAndroidLink = styled.a`
  cursor: pointer;
`

export const Apple = styled.img`
  display: block;
  width: 100%;
  @media (max-width: 720px) {
    width: 128px;
  }
`

export const Android = styled.img`
  display: block;
  width: 100%;
  @media (max-width: 720px) {
    width: 130px;
  }
`

export const MobileContainer = styled.div`
  position: relative;
  bottom: 85px;
  @media (max-width: 985px) {
    display: none;
  }
`

export const MobileImg = styled.img`
  display: block;
  max-width: 100%;
`
