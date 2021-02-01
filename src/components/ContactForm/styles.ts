import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  background: #fff;
  border-radius: 12px 0 0 12px;
  position: relative;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ${media.lessThan('medium')`
    width: 100%;
    min-height: 300px;
    border-radius: 8px 8px 0 0;
  `}
`

export const Loading = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.6);

  &::before {
    content: '';
    width: 250px;
    height: 250px;
    background: transparent;

    border-top: 2px solid transparent;
    border-left: 2px solid #674394;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;

    border-radius: 50%;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

export const BoxSuccess = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  opacity: 0;
  margin: auto;
  visibility: hidden;
  background: #0f8b8d;
  border-radius: 12px 0 0 12px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip-path: circle(10px at center);

  transition: all ease 0.8s;

  svg {
    width: 120px;
    height: 120px;

    color: #fff;

    transform: scale(0.05);
    transition: all ease 0.8s;
  }

  h1 {
    color: #fff;
    margin-top: 20px;
    opacity: 0;

    transition: all ease 0.8s;
  }

  ${media.lessThan('medium')`
    border-radius: 8px 8px 0 0;
    svg {
      width: 100px;
      height: 100px;
    }

    h1 {
      font-size: 24px;
      text-align: center;
    }
  `}

  ${props =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
      clip-path: circle(80% at center);

      svg {
        transform: scale(1);
      }

      h1 {
        opacity: 1;
      }
    `}
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background: blue; */

  svg {
    width: 30px;
    height: 30px;
    color: #4d386d;
  }

  > div {
    display: flex;

    /* background: pink; */
  }

  margin-bottom: 60px;

  ${media.lessThan('medium')`
    margin-bottom: 30px;

    svg {
      width: 24px;
      height: 24px;
    }
  `}
`

export const TitleLines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  margin-right: 5px;

  span {
    display: block;
    height: 2px;

    background: #4d386d;

    & + span {
      margin-top: 4px;
    }
  }

  span:nth-child(1) {
    width: 24px;
  }
  span:nth-child(2) {
    width: 14px;
  }
  span:nth-child(3) {
    width: 7px;
  }

  ${media.lessThan('medium')`
    span:nth-child(1) {
      width: 20px;
    }
    span:nth-child(2) {
      width: 10px;
    }
    span:nth-child(3) {
      width: 4px;
    }
  `}
`

export const GridInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  margin-bottom: 40px;

  ${media.lessThan('large')`
    gap: 30px;
    margin-bottom: 30px;
  `}

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0px;

    margin-bottom: 20px;

    div {
      & + div {
        margin-top: 20px;
      }
    }
  `}
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto auto 0;
  background: #674394;
  font-size: 20px;
  color: #fff;
  width: 400px;
  height: 50px;

  border-radius: 6px;
  border: 0;

  transition: 0.6s;

  svg {
    width: 20px;
    height: 20px;
    color: #fff;

    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
    background: #4d386d;
  }

  ${media.lessThan('medium')`
    width: 75%;
    height: 45px;
    font-size: 16px;
    margin-top: 30px;

    svg {
      width: 16px;
      height: 16px;

      margin-left: 6px;
    }
  `}
`
