
function Input({ onChange, value }) {
  return (
    <>
      <input type="number" className="transition-colors border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-black/10 border-gray-600 placeholder-white/60 text-white" placeholder="Digite su código aquí" onChange={ onChange } value={ value } maxLength='6' required />
    </>

    )
}

export default Input