import { checkImportanceColor} from '../List/List'



export function ReadyList({ toDos }) {  
  return (
    <div className="readyListContainer">
      <div className="readyListTitle">
        <h1>Ready List:</h1>
      </div>
      <div className="readyList">
        {toDos.filter(toDo => toDo.state === "ready")
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