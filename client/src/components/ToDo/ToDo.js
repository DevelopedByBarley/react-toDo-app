import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Form } from "../Form/Form";
import { List } from "../List/List";
import { PopUpButton } from "../PopUpButton/PopUpButton"
import { Spinner } from "../Spinner/Spinner"
import './ToDo.css'

export function ToDo() {

  const [toDos, setToDos] = useState([]);
  const [isPopUpActive, setPopUpActive] = useState(false)
  const [isPending, setPending] = useState(false)

  const getToDos = () => {
    setPending(true)
    axios.get('/api/toDos')
      .then(res => setToDos(res.data))
      .finally(() => {
        setPending(false)
      })
  }

  useEffect(() => {
    getToDos()
  }, [])
;
  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <div className='toDo'>
          <Form toDos={toDos} setToDos={setToDos} isPopUpActive={isPopUpActive} setPopUpActive={setPopUpActive} />
          <List toDos={toDos} setToDos={setToDos} />
          <PopUpButton setPopUpActive={setPopUpActive} />
        </div>
      )}
    </>
  )
}