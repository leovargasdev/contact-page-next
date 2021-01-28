import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  background: #fff;
  border-radius: 12px 0 0 12px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* background: blue; */
  }
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
