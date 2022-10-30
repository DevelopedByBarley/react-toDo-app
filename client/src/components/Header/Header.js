import './Header.css'

export function Header({toDos}) {
  console.log(toDos);
  console.log(toDos.filter(todo => todo.state === 'ready').length);
  return (
    <div className='header'>
      <h1>What do you want ToDO?</h1>
      <p>U have <span className='numberOfToDos'>{toDos.filter(todo => todo.state === 'ready').length}</span> todos!</p>
    </div>
  )
}