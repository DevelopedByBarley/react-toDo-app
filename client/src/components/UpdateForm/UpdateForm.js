import './UpdateForm.css'
import axios from 'axios';

export function UpdateForm({ setListItem, listItem, setToDos, setListItemForUpdate }) {
  return (
    <div className="update-form-container">
      <h1>Update</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        try {
          axios.put(`/api/toDos/${listItem._id}`, {
            title: event.target.elements.title.value,
            importance: event.target.elements.importance.value,
            alarm: event.target.elements.alarm.value
          }).then((res) => {
            setToDos((prevToDos) => {
              const id = res.data._id;
              const newToDo = res.data;
              const next = [...prevToDos];
              const index = prevToDos.findIndex(todo => todo._id === id);
              next[index] = newToDo
              return next;
            })
            setListItem("")
          })

        } catch (error) {
          console.log(error);
        }

        event.target.elements.title.value = ""
      }}>
        <input type="text" defaultValue={listItem.title} required name="title" id="title" />
        <select name="importance" id="importance">
          <option value="not-important">Not important</option>
          <option value="important">Important</option>
          <option value="very-important">Very important</option>
        </select>
        <input type="date" name="alarm" id="alarm" required />
        <button type="submit" className="add-btn">Add</button>
        <button className='back' aria-hidden="true" onClick={(event) => {
          event.preventDefault();
          setListItemForUpdate("");
        }}>&#x2716;</button>
      </form>
    </div>
  )
}