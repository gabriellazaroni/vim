import styled from 'styled-components'
import food from '../../assets/food.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1230px) {
    align-items: center;
  }
`

export const ImgContainer = styled.div``

export const Img = styled.img``

export const TextTitleContainer = styled.div`
  padding: 74px 200px 74px 200px;
  @media (max-width: 1190px) {
    padding: 74px 0 0 0;
  }
`

export const TextTitle = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  position: relative;
  font-size: var(--font-xxl);
  line-height: 1.5;
  @media (max-width: 1230px) {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  &:after {
    content: url(${food});
    position: absolute;
    bottom: -380px;
    max-width: 535px;
    @media (max-width: 1410px) {
      content: url(${food});
      position: absolute;
      bottom: -375px;
      right: -150px;
      transform: scale(0.8);
    }
    @media (max-width: 1230px) {
      display: none;
    }
  }
`

export const TextLegendContainer = styled.div`
  display: flex;
  padding: 0 500px 0 0;
  @media (max-width: 1230px) {
    padding: 0;
    max-width: 400px;
    margin: 0 auto;
  }
  @media (max-width: 530px) {
    margin: 0 60px;
  }
`

export const TextLegend = styled.p`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--gray-400);
  line-height: 2;
  margin-top: 30px;
  @media (max-width: 1190px) {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 850px) {
    margin-top: 15px;
  }
`
