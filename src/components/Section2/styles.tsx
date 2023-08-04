import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 70px 150px 0px 150px;
  gap: 98px;
  position: relative;
  @media (max-width: 1190px) {
    padding: 0px 20px 0px 20px;
    gap: 50px;
    margin-top: 150px;
    justify-content: center;
  }
  @media (max-width: 985px) {
    margin-top: 100px;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  @media (max-width: 850px) {
    display: none;
  }
`

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 555px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  @media (max-width: 1130px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 850px) {
    padding: 0px 60px 0px 60px;
    gap: 15px;
  }
`

export const DescriptionTitle = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-xl);
  font-weight: 700;
`

export const DescriptionText = styled.p`
  font-size: var(--font-sm);
  font-weight: 400;
  color: #5b554d;
`

export const Button = styled.button`
  width: 142px;
  height: 42px;
  background-color: var(--orange);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-size: var(--font-sm);
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  @media (max-width: 660px) {
    width: 102px;
    height: 32px;
  }
`
