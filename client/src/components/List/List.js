import axios from 'axios'
import { useState } from 'react'
import { Modal } from '../Modal/Modal';




export function List({ toDos, setToDos }) {

  const [deleteId, setDeleteId] = useState("");



  return (
    <>
      {deleteId ?
        (
          <Modal
            onApproved={() => {
              axios.delete(`/api/toDos/${deleteId}`)
                .then((res) => {
                  setToDos((prevToDos) => {
                    const next = [...prevToDos];
                    console.log(console.log(next));
                    const index = prevToDos.findIndex(todo => todo._id === deleteId)
                    next.splice(index, 1)
                    return next;
                  })
                })
              setDeleteId("");
            }}
            onClosed={() => {
              setDeleteId("")
            }}
          >
            <p>Biztosan törlöd ezt teendőd?</p>
          </Modal>
        )
        :
        ("")
      }


      <div className="listContainer">
        <div className="listTitle">
          <h1>Ready List:</h1>
        </div>
        <div className="list">
          {toDos.filter(toDo => toDo.state === "ready")
            .map((toDo, i) => {

              return (
                <div key={toDo._id} style={{ "backgroundColor": checkImportanceColor(toDo.importance) }}>
                  <h3>{toDo.title}</h3>
                  <div className='icons'>
                    <button className='delete' onClick={(event) => {
                      setDeleteId(toDo._id)
                      console.log(deleteId);
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
  switch(importance) {
    case 'important':
      return 'orange';
    case 'very-important':
      return 'red';
    default:
      return 'lightblue'
  }
}