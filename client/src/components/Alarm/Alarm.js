import './Alarm.css'

export function Alarm({ alarmListItem, setAlarmListItem }) {
  return (
    <>
      {alarmListItem.length > 0 ?
        (
          <div className="alarm-container">
            <div className='alarm-nav'>
              <button className='back' onClick={() => { setAlarmListItem("") }}>&#x2716;</button>
              <div className='alarm-header'>
                <h2>You got ToDo!</h2>
              </div>
            </div>
            <div className='alarm-body'>
              <p>You have {alarmListItem.length} ToDo Today!</p>
            </div>
            <div className='alarm-footer'>
              <button className="accept-alarm-btn" onClick={() => {setAlarmListItem("") }}>Got It!</button>
            </div>
          </div>
        )
        :
        (
          ""
        )
      }
    </>

  )
} 