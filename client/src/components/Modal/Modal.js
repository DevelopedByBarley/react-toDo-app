import './Modal.css'

export function Modal({ onApproved, onClosed, children }) {
  return (
    <div className="modal">
      <h4>{children}</h4>
      <div className='modal-btns'>
        <button className="modal-btn approve" onClick={onApproved}>Approve</button>
        <button className="modal-btn decline" onClick={onClosed}>Close</button>
      </div>
    </div>
  )
}