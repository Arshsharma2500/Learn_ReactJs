import React, { useState } from 'react'

function TodoList() {
    const[list,setList] = useState("");
    const[todo,setTodo] = useState([]);

    const handleclick = (() => {
        setTodo([...todo,list]);
        setList("");
        
    })

    const handleDelete = (indexToDelete) => {
        const newTodo = todo.filter((_, index) => index !== indexToDelete);
        setTodo(newTodo);
      };
    
    const getsearch = (() => {
      
      todo.map((items,index) => {
        if(items === list){
          const temp = todo[0];
          todo[0] = todo[index];
          todo[index] = temp;
        }
      })

      const updatedtodo = [...todo]
      setTodo(updatedtodo);
      
    })

  return (
    <div className='flex flex-row justify-center flex-wrap'>
      <div className='flex flex-col justify-center h-screen'>
        <div className='bg-gray-300 p-4 bg-transparent rounded-md'>
          <div className="flex justify-center">
            <h1 className="text-white text-2xl bg-green-400 p-2 px-[4vw] rounded-md ">To Do List</h1>
          </div>
          <div className='flex flex-row justify-center my-2'>
            <input type='text' className='border-2 border-solid box-border border-black rounded-md mx-2' placeholder='write name of To_Do' value={list} onChange={(e)=>(setList(e.target.value))}>
            
            </input>

            <button className='bg-slate-500 active:bg-slate-600 rounded-md px-2 py-1 mr-3' onClick={handleclick}>
                Add
            </button>
            
            <button className='bg-slate-500 active:bg-slate-600 rounded-md px-2 py-1 mr-3'>
                Edit
            </button>

            <button className='bg-slate-500 active:bg-slate-600 rounded-md px-2 py-1 mr-3' onClick={getsearch}>
                Search
            </button>

          </div>
        
            {/* add list */}

          <div className='flex flex-col my-2'>
            <div>
                {todo.map((item,index)=>(<div className="flex items-center my-1" key={index}>
                      <li className="bg-slate-400 rounded-md p-1 list-none flex-grow">
                        {item}
                      </li>
                      <button
                        className="bg-red-500 active:bg-red-600 text-white rounded-md px-2 py-1 ml-2"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>))}
                
            </div>
          </div>

          </div>
      </div>
    </div>
  )
}

export default TodoList