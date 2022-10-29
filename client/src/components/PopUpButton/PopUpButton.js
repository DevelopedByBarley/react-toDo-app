export function PopUpButton({setPopUpActive}) {
  return (
    <div className="popUp">
      <button className="popUpBtn" onClick={() => setPopUpActive(true)}>+</button>
    </div>
  )
}