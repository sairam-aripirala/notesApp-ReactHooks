import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  AppContainer,
  CardCon,
  NoteCon,
  Header,
  Input,
  NotesTextArea,
  Button,
  EachList,
  EmptyHead,
  EmptyPara,
  EmptyCon,
  NoNotesImage,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      note,
    }

    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  //   console.log(notesList)

  const emptyView = () => (
    <EmptyCon>
      <NoNotesImage
        alt="notes empty"
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptyPara>Notes you add will appear here</EmptyPara>
    </EmptyCon>
  )

  const notesView = () => (
    <EachList>
      {notesList.map(eachNote => (
        <NoteItem noteDetails={eachNote} key={eachNote.id} />
      ))}
    </EachList>
  )

  return (
    <AppContainer>
      <NoteCon>
        <Header>Notes</Header>
        <CardCon onSubmit={onSubmitForm}>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <NotesTextArea
            type="text"
            placeholder="Take a Note..."
            rows="5"
            cols="115"
            onChange={onChangeNote}
            value={note}
          />
          <Button type="submit">Add</Button>
        </CardCon>

        {notesList.length === 0 ? emptyView() : notesView()}
      </NoteCon>
    </AppContainer>
  )
}

export default Notes
