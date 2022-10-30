import './Modal.css'

export function Modal({ onApproved, onClosed, children }) {
  return (
    <div className="modal">
      <h4>{children}</h4>
      <button onClick={onApproved}>approved</button>
      <button onClick={onClosed}>Closed</button>
    </div>
  )
}