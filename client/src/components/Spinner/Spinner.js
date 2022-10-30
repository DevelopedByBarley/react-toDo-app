import PuffLoader from 'react-spinners/PuffLoader'
import './Spinner.css'

export function Spinner() {
  return (
    <div className='spinner'>
      <PuffLoader/>
    </div>
  )
}