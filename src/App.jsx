import { useState } from 'react'

function App() {
  
  const[color,setcolor] = useState("green");

  const navigatepassGn = (()=>{
    window.location.href = '/pass';
  })


  return (
    <>
    <div className='relative w-full h-screen duration-200'  style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center items-end bottom-12 inset-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white bg-opacity-30 px-3 py-2 rounded-3xl'>
          <button className=' bg-green-600 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("rgb(22 163 74)")}>b</button>
          <button className=' bg-sky-600 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("rgb(2 132 199)")}>b</button>
          <button className=' bg-orange-600 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("rgb(234 88 12)")}>b</button>
          <button className=' bg-yellow-700 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("rgb(161 98 7)")}>b</button>
          <button className=' bg-gray-900 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("rgb(17 24 39)")}>b</button>
          <button className=' bg-gray-400 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("rgb(156 163 175)")}>b</button>
          <button className=' bg-pink-400 w-12 rounded-full outline-none px-4 py-1 text-white shadow-lg' onClick={()=> setcolor("#f472b6")}>b</button>
        </div>
      </div>
      <div className='inset-0 flex justify-end px-4 py-4'>
        <div className='flex flex-col justify-center gap-3 shadow-lg py-2 bg-white bg-opacity-30 px-2 rounded-xl'>
          <button className='bg-transparent hover:bg-slate-700 hover:bg-opacity-60 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-700 hover:border-transparent rounded'
          onClick={navigatepassGn}>PassGn</button>
          <button className='bg-transparent hover:bg-slate-600 hover:bg-opacity-40 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-700 hover:border-transparent rounded'
          onClick={()=>{window.location.href = '/currencyapp'}}>CurrConv</button>
          <button className='bg-transparent hover:bg-slate-600 hover:bg-opacity-40 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-700 hover:border-transparent rounded'
          onClick={()=>{window.location.href = '/todolist'}}>To_Do</button>
          
          
        </div>
      </div>
      

      </div>
    </>
  )
}

export default App
