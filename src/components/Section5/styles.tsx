import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--orange-100);
  height: 448px;
  @media (max-width: 495px) {
    height: 250px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const Contact = styled.p`
  color: var(--orange-200);
  letter-spacing: 5px;
`

export const Title = styled.h1`
  font-family: 'Philosopher', sans-serif;
  font-size: var(--font-l);
  font-weight: 700;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 46px;
  padding: 0px 20px 0px 20px;
`

export const Input = styled.input`
  width: 594px;
  height: 75px;
  padding: 32px;
  font-size: var(--font-sm);
  font-weight: 400;
  border: none;
  border-radius: 10px 0 0 10px;
  background-color: var(--white);
  color: var(--gray-400);
  @media (max-width: 700px) {
    height: 30px;
    padding: 20px;
  }
`

export const InputButton = styled.input`
  border: none;
  background-color: var(--orange);
  width: 156px;
  height: 75px;
  color: var(--white);
  font-size: var(--font-md);
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  @media (max-width: 700px) {
    height: 40px;
    width: 120px;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`
