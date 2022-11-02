import './UpdateForm.css'
import axios from 'axios';

export function UpdateForm({ listItem, setToDos, setListItemForUpdate, setPending }) {
  return (
    <div className="update-form-container">
      <h1>Update</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        try {
          setPending(true)
          axios.put(`/api/toDos/${listItem._id}`, {
            title: event.target.elements.title.value,
            importance: event.target.elements.importance.value
          }).then((res) => {
            setToDos((prevToDos) => {
              const id = res.data._id;
              const newToDo = res.data;
              const next = [...prevToDos];
              const index = prevToDos.findIndex(todo => todo._id === id);
              next[index] = newToDo
              setListItemForUpdate("")
              return next;
            })
          }).finally(() => setPending(false))

        } catch (error) {
          console.log(error);
        }

        event.target.elements.title.value = ""
      }}>
        <input type="text" defaultValue={listItem.title} required name="title" id="title"/>
        <select name="importance" id="importance">
          <option value="not-important">Not important</option>
          <option value="important">Important</option>
          <option value="very-important">Very important</option>
        </select>
        <button type="submit" className="add-btn">Add</button>
        <button onClick={(event) => {
          event.preventDefault();
          setListItemForUpdate("");
        }}>Back</button>
      </form>
    </div>
  )
}