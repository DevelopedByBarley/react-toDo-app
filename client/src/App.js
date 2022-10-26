import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9090/api/toDos')
      .then(res => setToDos(res.data))
  }, [])
  return (
    <div>
      {toDos.map((toDo) => {
        return (
          <div key={toDo._id}>
            <h1>{toDo.title}</h1>
            <p>{toDo.importance}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App;
