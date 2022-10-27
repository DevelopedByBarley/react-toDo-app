import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToDo } from './components/ToDo';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios.get('/api/toDos')
      .then(res => setToDos(res.data))
  }, [])

  console.log(toDos);

  return (
    <ToDo/>
  )
}

export default App;
