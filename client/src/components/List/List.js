import axios from 'axios'
import { useState } from 'react'
import { Modal } from '../Modal/Modal';
import './List.css'




export function List({ toDos, setToDos, setPending }) {

  const [deleteId, setDeleteId] = useState("");



  return (
    <>
      {deleteId ?
        (
          <Modal
            onApproved={() => {
              setPending(true)
              axios.delete(`/api/toDos/${deleteId}`)
                .then((res) => {
                  setToDos((prevToDos) => {
                    const next = [...prevToDos];
                    const index = prevToDos.findIndex(todo => todo._id === deleteId)
                    next.splice(index, 1)
                    return next;
                  })
                })
                .finally(() => setPending(false))
              setDeleteId("");
            }}
            onClosed={() => {
              setDeleteId("")
            }}
          >
            <p>Are u sure do you want to delete that toDo?</p>
          </Modal>
        )
        :
        ("")
      }


      <div className="list-container">
        <div className="list">
          {toDos.filter(toDo => toDo.state === "ready")
            .map((toDo, i) => {

              return (
                <div className='list-item' key={toDo._id} style={{ "border": `2px solid ${checkImportanceColor(toDo.importance)}`, "color": checkImportanceColor(toDo.importance) }}>
                  <div className='toDoTItle'>{toDo.title}</div>
                  <div className='icons'>
                    <button className='delete-btn' onClick={(event) => {
                      setDeleteId(toDo._id)
                      event.preventDefault()

                    }}>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

function checkImportanceColor(importance) {
  switch (importance) {
    case 'important':
      return '#f4a688';
    case 'very-important':
      return ' #e06377';
    default:
      return '#5b9aa0'
  }
}