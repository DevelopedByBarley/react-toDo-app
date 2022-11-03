
import { useEffect, useState } from 'react'
import { ListItemModal } from '../ListItemModal/ListItemModal'
import './List.css'
import moment from "moment";
import { Alarm } from '../Alarm/Alarm';
import axios from 'axios';





export function List({ toDos, setToDos, setPending }) {


  const [listItem, setListItem] = useState("");
  const [alarmListItem, setAlarmListItem] = useState([]);

  useEffect(() => {
    const getAlarmListItem = toDos.filter(todo => moment(todo.date).format('MMM-Do-YY') === moment(todo.alarm).format('MMM-Do-YY') && todo.isItDone === false)
    setAlarmListItem(getAlarmListItem)
  }, [])



  return (
    <>
      {listItem ? (
        <ListItemModal listItem={listItem} setListItem={setListItem} toDos={toDos} setToDos={setToDos} setPending={setPending} />
      ) :
        ("")
      }


      {
        <Alarm alarmListItem={alarmListItem} setAlarmListItem={setAlarmListItem} />
      }









      <div className="list-container">
        <div className="list list-incomplete">
          <h1>ToDo:</h1>
          {toDos.filter(todo => todo.isItDone === false)
            .map((toDo) => {
              return (
                <div key={toDo._id} className="list-item" style={
                  {
                    "backgroundColor": checkImportanceColor(toDo.importance),
                    "filter": `grayscale(${toDo.isItDone ? "100%" : "0"})`,
                    "textDecoration": `${toDo.isItDone ? "line-through" : ""}`,

                  }}>

                  <div style={{ "cursor": "pointer", "pointerEvents": `${toDo.isItDone ? "none" : ""}` }} onClick={() => {
                    setListItem(toDo)
                  }} className='list-item-content'>
                    <div className='toDo-title'>{toDo.title}</div>
                    <div className='toDo-date'>{moment(toDo.alarm).endOf('day').fromNow()}</div>
                  </div>


                  <div className='isItDone-container'>
                    <input type="checkbox" className='isItDone' defaultChecked={toDo.isItDone} onClick={() => setToDos(toggleToDo(toDos, toDo._id))} />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='list list-completed'>
            <h1>Completed:</h1>
            {toDos.filter(todo => todo.isItDone === true)
              .map((toDo) => {
                return (
                  <div key={toDo._id} className="list-item" style={
                    {
                      "backgroundColor": checkImportanceColor(toDo.importance),
                      "filter": `grayscale(${toDo.isItDone ? "100%" : "0"})`,
                      "textDecoration": `${toDo.isItDone ? "line-through" : ""}`,

                    }}>

                    <div style={{ "cursor": "pointer", "pointerEvents": `${toDo.isItDone ? "none" : ""}` }} onClick={() => {
                      setListItem(toDo)
                    }} className='list-item-content'>
                      <div className='toDo-title'>{toDo.title}</div>
                      <div className='toDo-date'>{moment(toDo.alarm).endOf('day').fromNow()}</div>
                    </div>


                    <div className='isItDone-container'>
                      <input type="checkbox" className='isItDone' defaultChecked={toDo.isItDone} onClick={() => setToDos(toggleToDo(toDos, toDo._id))} />
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


function toggleToDo(toDos, id) {
  const next = [...toDos];
  const todo = next.find(todo => todo._id === id);
  todo.isItDone = !todo.isItDone;
  const updateToDo = {
    title: todo.title,
    importance: todo.importance,
    isItDone: todo.isItDone
  }
  axios.put(`/api/toDos/${id}`, updateToDo)
    .then(res => console.log(res.data))

  return next
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
