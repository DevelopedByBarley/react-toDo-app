import axios from 'axios'
import { useState } from 'react'
import {ListItemModal} from '../ListItemModal/ListItemModal'
import './List.css'





export function List({ toDos, setToDos, setPending }) {


  const [listItem, setListItem] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("")



  return (
    <>
      {listItem ? (
        <ListItemModal listItem={listItem} setListItem={setListItem} toDos={toDos} setToDos={setToDos} setPending={setPending} />
      ) : 
      ("")
      }









      <div className="list-container">
        <div className="list">
          {toDos.filter(toDo => toDo.state === "ready")
            .map((toDo) => {

              return (
                <div  onClick={() => { 
                  setListItem(toDo) 
                  }} className='list-item' key={toDo._id} style={{ "backgroundColor": checkImportanceColor(toDo.importance) }}>
                  <div className='toDoTItle'>{toDo.title}</div>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}










export function checkImportanceColor(importance) {
  switch (importance) {
    case 'important':
      return '#f4a688';
    case 'very-important':
      return ' #e06377';
    default:
      return '#1CAC78'
  }
}

