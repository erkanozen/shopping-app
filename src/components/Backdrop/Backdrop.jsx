import "./Backdrop.css"

const Backdrop = ({hiddenCart}) => {
  return (
    <div onClick={hiddenCart} className="backdrop" />
  )
}

export default Backdrop