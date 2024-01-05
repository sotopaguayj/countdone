
function Digit({ value }) {

  value = value < 10 ? `0${value}` : value.toString()
  value.split(' ')
  const [ten, unit] = value

  return (
    <div>
      {
      value <= 10 ? (<span>0</span>) : (<span>{ ten }</span>)
      }
      <span>{ unit }</span>
    </div>
  )
}

export default Digit