import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Page = () => {
  let [title, setTitle] = useState("");
  let [mainTask, setMainTask] = useState([]);


  const submitHandler = (s) => {
    s.preventDefault();
    setMainTask([...mainTask, { name: title }]);
    setTitle("");
    console.log(mainTask);
  }

  async function getData() {
    
    try {
      const response = await axios.get('https://api.github.com/users/shrutikapoor08/repos');
      setMainTask(response?.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className='max-w-7xl m-auto'>
        <h1 className='bg-bgprimary text-textColor p-10 text-4xl font-bold text-center rounded-b-lg'>My Todo List</h1>
        <form className='flex justify-center flex-wrap items-center py-10' onSubmit={submitHandler}>
          <input type='text' className='text-black m-5 px-3 text-2xl w-full max-w-xl py-2 border-zinc-400 border-2 rounded' placeholder='Enter Task Here' value={title} onChange={(v) => {
            setTitle(v.target.value)
          }}></input>
          <button className='bg-bgprimary text-textColor px-4 py-3 font-bold rounded'>Add Task</button>
        </form>
        <hr />
        <div className='p-8 bg-textColor rounded'>
          <ul>
            {mainTask && mainTask.length > 0 ? (
              <>
                {mainTask.map((item, index) => (
                  <li key={index}>
                    <div>
                      <p className='py-2 text-black text-2xl'>{item.name}</p>
                    </div>
                  </li>
                ))}
              </>
            ) : (
              <h2 className='text-black text-2xl'>No Task Available</h2>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page