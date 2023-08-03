import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 0px 150px 0px 150px;
  @media (max-width: 900px) {
    padding: 0px 20px 0px 20px;
  }
`

export const Logo = styled.img``

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 36px;
`
export const TextContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const TextNav = styled.a`
  color: var(--brown);
  cursor: pointer;
  font-size: var(--font-sm);
  text-decoration: none;
`

export const TextNavHome = styled.a`
  color: var(--brown);
  font-size: var(--font-sm);
  text-decoration: none;
  color: var(--orange);
  cursor: pointer;
`

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LoginButton = styled.button`
  width: 155px;
  height: 46px;
  background-color: var(--orange);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-size: var(--font-md);
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    margin-left: 50px;
  }
  @media (max-width: 425px) {
    width: 80px;
    height: 30px;
  }
  @media (max-width: 425px) {
    margin-left: 30px;
    width: 60px;
    height: 25px;
  }
`
