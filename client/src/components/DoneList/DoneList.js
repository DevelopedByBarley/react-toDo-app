import { checkImportanceColor} from '../List/List'

export function DoneList({ toDos }) {
  return (
    <div className="doneListContainer">
      <div className="doneListTitle">
        <h1>Done:</h1>
      </div>
      <div className="doneList" >
        {toDos.filter(toDo => toDo.state === "done")
          .map((toDo) => {
            return (
              <div style={{"backgroundColor": checkImportanceColor(toDo.importance)}}>
                <h1>{toDo.title}</h1>
                <p>{toDo.state}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}