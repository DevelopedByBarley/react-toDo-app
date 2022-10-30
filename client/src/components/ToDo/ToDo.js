import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Form } from "../Form/Form";
import { Header } from '../Header/Header';
import { List } from "../List/List";
import { Spinner } from "../Spinner/Spinner"
import { PopUpButton } from '../PopUpButton/PopUpButton'
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
    <div className='todo-container'>
      {isPending ? (
        <Spinner />
      ) : (
        <div className='toDo'>
          <Header />
          <Form toDos={toDos} setToDos={setToDos} isPopUpActive={isPopUpActive} setPopUpActive={setPopUpActive} />
          <List toDos={toDos} setToDos={setToDos} setPending={setPending} />
          <PopUpButton setPopUpActive={setPopUpActive} />
        </div>
      )}
    </div>
  )
}