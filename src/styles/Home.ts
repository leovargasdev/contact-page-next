import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    338deg,
    rgba(103, 67, 148, 1) 30%,
    rgba(77, 56, 109, 1) 30%,
    rgba(77, 56, 109, 1) 70%,
    rgba(103, 67, 148, 1) 70%
  );

  padding: 0 40px;
`

export const Content = styled.section`
  display: flex;
  align-items: stretch;

  width: 100%;
  max-width: 1200px;
  height: 600px;

  margin: auto;
  border-radius: 12px;
  background: transparent;
  box-shadow: 3px 3px 25px 6px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    flex-direction: column;

    padding: 50px;
  }
`
