import axios from 'axios';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { checkImportanceColor } from '../List/List'
import './ListItemModal.css'
import { UpdateForm } from '../UpdateForm/UpdateForm';


export function ListItemModal({ listItem, setPending, setToDos, setListItem }) {
  const [deleteId, setDeleteId] = useState("");
  const [listItemForUpdate, setListItemForUpdate] = useState("")

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

      {listItemForUpdate ? (
        <UpdateForm listItem={listItem} setToDos={setToDos} setListItem={setListItem} setPending={setPending}/>
      ) : ("")}




      <div className="list-item-container" style={{ "background": checkImportanceColor(listItem.importance) }}>
        <div className='list-item-body'>
          <h1 className='title'>{listItem.title}</h1>
          <p className='importance'>{listItem.importance}</p>
        </div>
        <button className='delete-btn' onClick={(event) => {
          setDeleteId(listItem._id)
          event.preventDefault()

        }}>Delete</button>
        <button className='update-btn' onClick={(event) => {
          setListItemForUpdate(listItem)
          event.preventDefault()

        }}>Update</button>
      </div>
    </>
  )
}

