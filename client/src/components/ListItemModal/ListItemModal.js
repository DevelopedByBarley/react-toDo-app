import axios from 'axios';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { checkImportanceColor } from '../List/List'
import './ListItemModal.css'
import { UpdateForm } from '../UpdateForm/UpdateForm';
import moment from 'moment';



export function ListItemModal({ listItem, setToDos, setListItem }) {
  const [deleteId, setDeleteId] = useState("");
  const [listItemForUpdate, setListItemForUpdate] = useState("")

  console.log(listItem);

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
                    const index = prevToDos.findIndex(todo => todo._id === deleteId)
                    next.splice(index, 1)
                    return next;
                  })
                })
              setDeleteId("");
              setListItem("")
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
        <UpdateForm listItem={listItem} setListItem={setListItem} setToDos={setToDos} setListItemForUpdate={setListItemForUpdate} />
      ) : ("")}




      <div className={`list-item-container ${listItemForUpdate ? "inactive" : ""}`} style={{ "background": checkImportanceColor(listItem.importance) }}>
        <button className='back' onClick={() => { setListItem("") }}><span aria-hidden="true">&#x2716;</span></button>
        <div className='list-item-body'>
          <div className='list-item-title list-item-body-group'>
            <h1 className='title'>{listItem.title}</h1>
          </div>
          <div className='list-item-importance list-item-body-group'>
            <h3>Importance:</h3>
            <p>{listItem.importance}</p>
          </div>
          <hr></hr>
          <div className='list-item-date list-item-body-group'>
            <h3>Added:</h3>
            <p>{moment(listItem.date).format("MMM Do YY")}</p>
          </div>
          <hr></hr>
          <div className='list-item-date list-item-body-group'>
            <h3>Alarm:</h3>
            <p>{moment(listItem.alarm).format("MMM Do YY")}</p>
          </div>
          <hr></hr>
        

          <div className='button-container'>
            <button className='delete-btn list-modal-btn' onClick={(event) => {
              setDeleteId(listItem._id)
              event.preventDefault()

            }}>Delete</button>
            <button className='update-btn list-modal-btn' onClick={(event) => {
              setListItemForUpdate(listItem)
              event.preventDefault()
            }}>Update</button>
          </div>
        </div>
      </div>

    </>
  )
}

/**
 *           {moment(listItem.alarm).format("YYYY/MM/DD")} 
      
          {moment(listItem.date).format("YYYY/MM/DD")}
 */