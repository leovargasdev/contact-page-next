import styled from 'styled-components'

export const Container = styled.div`
  color: #e0dce6;

  background: #3e3e3e;
  border-radius: 0 12px 12px 0;

  width: 35%;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* background: blue; */
`

export const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
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
      font-size: 16px;
      line-height: 25px;
    }
  }
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
      margin-left: 25px;
    }

    &:hover {
      svg {
        color: #fff;
      }
    }
  }
`
