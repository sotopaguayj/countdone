function Digit({ name, value }) {

  return (
    <div>
      <h3 className='text-sm font-bold uppercase text-slate-50 my-2'>{ name }</h3>
      <div className="bg-[#090909] text-white md:text-[100px] text-5xl md:size-40 size-20 p-4 rounded-lg grid place-content-center">{ value < 10 ? `0${ value }` : value }</div>
    </div>
  )
}

export default Digit