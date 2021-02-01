import styled from 'styled-components'
import media from 'styled-media-query'

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

  padding: 40px;

  ${media.lessThan('medium')`
    height: 100%;
    min-height: 100vh;
    padding: 30px 20px;
  `}
`

export const Content = styled.section`
  display: flex;
  align-items: stretch;

  width: 100%;
  max-width: 1200px;
  height: 580px;

  margin: auto;
  border-radius: 12px;
  background: transparent;
  box-shadow: 3px 3px 25px 6px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    flex-direction: column;

    padding: 60px;
  }

  ${media.lessThan('large')`
    > div {
      padding: 30px;
    }
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
    border-radius: 8px;
    height: auto;

    > div {
      padding: 30px;

      h2 {
        font-size: 18px;
      }
    }
  `}
`
