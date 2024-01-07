
function Digit({ name, value }) {

  return (
    <div>
      <p className='text-sm font-bold uppercase text-slate-50 my-2'>{ name }</p>
      <div className="bg-[#090909] text-white text-[100px] w-40 rounded-lg mb-12">{ value < 10 ? `0${ value }` : value }</div>
    </div>
  )
}

export default Digit