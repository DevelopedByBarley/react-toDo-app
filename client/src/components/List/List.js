import { ReadyList } from '../ReadyList/ReadyList'
import { DoneList } from '../DoneList/DoneList'

export function List({ toDos }) {
  return (
    <div>
      <ReadyList toDos={toDos} />
      <DoneList toDos={toDos} />
    </div>
  )
}

export function checkImportanceColor(importance) {
  switch(importance) {
    case 'important':
      return 'orange';
    case 'very-important':
      return 'red';
    default:
      return 'lightblue'
  }
}