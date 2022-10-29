import axios from "axios";
import './Form.css'

export function Form({ toDos, setToDos, isPopUpActive, setPopUpActive }) {




  return (
    <>
      {
        isPopUpActive ?
          (
            <div className="toDoForm">
              <form onSubmit={(event) => {
                event.preventDefault();

                try {
                  axios.post('/api/toDos', {
                    title: event.target.elements.title.value,
                    importance: event.target.elements.importance.value
                  }).then(res => setToDos((prevToDos) => [...prevToDos, res.data]))
                  setPopUpActive(false)
                  console.log(toDos);
                } catch (error) {
                  console.log(error);
                }

                event.target.elements.title.value = ""
              }}>
                <button onClick={() => setPopUpActive(false)}>x</button>
                <input type="text" required name="title" id="title" placeholder="What do you want to Do?" />
                <select name="importance" id="importance">
                  <option value="not-important">Not important</option>
                  <option value="important">Important</option>
                  <option value="very-important">Very important</option>
                </select>
                <button type="submit">Send</button>
              </form>
            </div>
          )
          :
          ("")
      }
    </>
  )
}