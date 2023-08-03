import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 150px;
  padding: 0px 150px 0px 150px;
  @media (max-width: 1190px) {
    padding: 0px 20px 0px 20px;
  }
  @media (max-width: 985px) {
    margin-top: 100px;
  }
`

export const TitileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 0px 200px 0px 200px;
  @media (max-width: 850px) {
    padding: 0px 60px 0px 60px;
    text-align: center;
    gap: 15px;
  }
  @media (max-width: 270px) {
    text-align: center;
  }
`

export const Title = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-xl);
  font-weight: 700;
`

export const Text = styled.p`
  font-size: var(--font-sm);
  text-align: center;
  font-weight: 400;
  color: #5b554d;
`

export const ListFoodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 60px;
  justify-content: center;
  @media (max-width: 880px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 985px) {
    margin-top: 40px;
  }
  @media (max-width: 850px) {
    margin-top: 20px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-200);
  border-radius: 75px 10px 10px 10px;
`

export const FoodImgContainer = styled.div``

export const FoodImg = styled.img`
  display: block;
  max-width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 81px;
  margin-top: 21px;
`

export const CardTitle = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: 1.562rem;
  font-weight: 700;
  margin-left: 25px;
`

export const StarsImgContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 25px;
  margin-bottom: 40px;
`

export const StarsImg = styled.img`
  display: block;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const Button = styled.button`
  width: 190px;
  height: 42px;
  border: 2px solid #fcf5ed;
  background-color: transparent;
  color: var(--orange);
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: var(--font-sm);
  cursor: pointer;
  @media (max-width: 660px) {
    width: 150px;
    height: 32px;
  }
`
