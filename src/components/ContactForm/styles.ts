import styled, { css } from 'styled-components'

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
`

// export const Loading = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;

//   width: 300px;
//   height: 300px;

//   margin: auto;
//   background: transparent;

//   border-top: 2px solid transparent;
//   border-left: 2px solid #752;
//   border-bottom: 2px solid transparent;
//   border-right: 2px solid transparent;

//   border-radius: 50%;
//   /* transform-origin: center center; */
//   animation: rotation 1s linear infinite;

//   @keyframes rotation {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `

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
`

export const GridInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  margin-bottom: 40px;
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
`
