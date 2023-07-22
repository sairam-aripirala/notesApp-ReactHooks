import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  //   @media (min-width: 768px) {

  //   }
`
export const Header = styled.h1`
  font-family: Bree Serif;
  font-size: 40px;
  padding: -20px;
  color: #4c63b6;
`

export const EmptyHead = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: black;
`

export const EmptyPara = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: grey;
`

export const CardCon = styled.form`
  width: 90vw;
  height: 35vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  flex-direction: column;
  margin-top: -20px;
  @media (min-width: 768px) {
    width: 72vw;
    height: 35vh;
  }
`

export const EmptyCon = styled.div`
  width: 72vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  margin-top: 15px;
  flex-direction: column;
  margin-bottom: 15px;
  min-height: 45vh;
`

export const Input = styled.input`
  width: 50vw;
  height: 50px;
  padding: 5px;
  font-size: 15px;
  border: 0px;
  outline: none;
`

export const NotesTextArea = styled.textarea`
  width: 50vw;
  padding: 5px;
  font-size: 15px;
  border: 0px;
  outline: none;
`
export const Button = styled.button`
  width: 80px;
  height: 40px;
  color: white;
  background-color: #4c63b6;
  border-radius: 5px;
  border: 0px;
  align-self: flex-end;
  margin-right: 35px;
  margin-bottom: 5px;
`

export const NoNotesImage = styled.img`
  width: 150px;
  height: 150px;
`

export const EachList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  padding-left: 0;
  list-style-type: none;
  //   background-color: red;
`

export const NoteCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-top: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 68vw;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
  }
`
