
import { useEffect, useState } from 'react'
import { ListItemModal } from '../ListItemModal/ListItemModal'
import './List.css'
import moment from "moment";
import { Alarm } from '../Alarm/Alarm';





export function List({ toDos, setToDos, setPending }) {


  const [listItem, setListItem] = useState("");
  const [alarmListItem, setAlarmListItem] = useState([]);

  useEffect(() => {
    const getAlarmListItem = toDos.filter(todo => moment(todo.date).format('MMM-Do-YY') === moment(todo.alarm).format('MMM-Do-YY'))
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
        <Alarm alarmListItem={alarmListItem} setAlarmListItem={setAlarmListItem}/>
      }









      <div className="list-container">
        <div className="list">
          {toDos.filter(toDo => toDo.state === "ready")
            .map((toDo) => {
              return (
                <div onClick={() => {
                  setListItem(toDo)
                }} className='list-item' key={toDo._id} style={{ "backgroundColor": checkImportanceColor(toDo.importance) }}>
                  <div className='toDo-title'>{toDo.title}</div>  
                  <div className='toDo-date'>{moment(toDo.alarm).endOf('day').fromNow()}</div>
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

