import styled, { css } from 'styled-components'

interface ContainerProps {
  isFilled: boolean
  isFocus: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* background: #000; */

  label {
    font-weight: 300;
    color: #888;
    font-size: 14px;
    margin-bottom: 6px;
  }

  input {
    /* background: transparent; */
    border: 0;
    padding: 3px 0 10px;
    font-size: 18px;
    color: #333;

    &::placeholder {
      color: #888;
    }
  }

  span {
    display: inline;
    background: rgba(0, 0, 0, 0.1);
    height: 2px;
    width: 100%;
    position: relative;

    transition: 1s;

    &::after {
      content: '';
      display: inline;
      position: absolute;
      top: 0;
      left: 0;

      width: 0;
      height: 2px;
      background: #4d386d;
      transition: 1s;
    }
  }

  ${props =>
    props.isFocus &&
    css`
      label {
        color: #4d386d;
      }
      span::after {
        width: 100%;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      span::after {
        width: 100%;
      }
    `}
`
