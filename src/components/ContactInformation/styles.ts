import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  color: #e0dce6;

  background: #3e3e3e;
  border-radius: 0 12px 12px 0;

  width: 35%;

  ${media.lessThan('medium')`
    width: 100%;
    border-radius: 0 0 8px 8px;
  `}
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* background: blue; */

  ${media.lessThan('medium')`
    flex-direction: row;
    justify-content: space-between;

    margin-top: 20px;
  `}

  ${media.lessThan('small')`
    flex-direction: column;

    > div:last-child {
      margin-top: 20px;
    }
  `}
`

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  /* background: gray; */

  svg {
    width: 22px;
    height: 22px;

    margin-right: 20px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* background: pink; */

    p {
      color: #fff !important;
      font-size: 16px;
      line-height: 25px;
    }
  }

  ${media.lessThan('medium')`
    svg {
      width: 18px;
      height: 18px;

      margin-right: 18px;
    }

    div p {
      font-size: 14px;
      line-height: 22px;
    }
  `}

  ${media.lessThan('small')`
    div p {
      font-size: 12px;
      line-height: 20px;
    }
  `}
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* background: coral; */

  svg {
    width: 30px;
    height: 30px;

    color: #b7afc5;
  }

  a {
    text-decoration: none;

    & + a {
      margin-left: 30px;
    }

    &:hover {
      svg {
        color: #fff;
      }
    }
  }

  ${media.lessThan('medium')`
    justify-content: center;
    margin: 20px 0 0;
    svg {
      width: 25px;
      height: 25px;
    }

    a {
      & + a {
        margin-left: 25px;
      }
    }
  `}
`
