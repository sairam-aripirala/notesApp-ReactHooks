import {EachNoteCon, NoteHeading, NotePara} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <EachNoteCon>
      <NoteHeading>{title}</NoteHeading>
      <NotePara>{note}</NotePara>
    </EachNoteCon>
  )
}

export default NoteItem
