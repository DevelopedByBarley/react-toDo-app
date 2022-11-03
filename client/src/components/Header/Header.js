import './Header.css'

export function Header({toDos}) {

  return (
    <div className='header'>
      <h1>What do you want ToDO?</h1>
      <p>U have <span className='numberOfToDos'>{toDos.filter(todo => todo.isItDone === false).length}</span> todos!</p>
    </div>
  )
}