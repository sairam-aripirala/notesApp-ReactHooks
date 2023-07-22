import styled from 'styled-components'

export const EachNoteCon = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 20vw;
  height: 25vh;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px;
  //   background-color: aqua;

  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 257px;
    flex-wrap: wrap;
    margin: 0px 8px 24px 8px;
  }
`

export const NotePara = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0;
  margin-top: 16px;
  line-height: 24px;
  line-height: 1.33;
  text-align: center;
`

export const NoteHeading = styled.h1`
  text-align: center;
  font-size: 20px;
  line-height: 1.33;
`
