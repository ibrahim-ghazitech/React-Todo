import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (s) => {
    s.preventDefault()
    setMainTask([...mainTask, { title }]);
    setTitle("");
    console.log(mainTask);
  }

  let renderedTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderedTask = mainTask.map((t, i) => { // t is current element and i for index and its zero base number 
      return (
        <li key={i}>
          <div>
            <p className='py-2'>{t.title}</p>
          </div>
        </li>
      );

    });
  };
  return (
    <>
      <div className='max-w-7xl m-auto'>
        <h1 className='bg-black text-white p-10 text-4xl font-bold text-center rounded-b-lg'>My Todo List</h1>
        <form className='flex justify-center flex-wrap items-center my-5' onSubmit={submitHandler}>
          <input type='text' className='text-black m-5 px-3 w-full max-w-xl py-2 border-zinc-400 border-2 rounded' placeholder='Enter Task Here' value={title} onChange={(v) => {
            setTitle(v.target.value)
          }}></input>
          <button className='bg-black text-white px-4 py-2 font-bold rounded'>Add Task</button>
        </form>
        <hr />
        <div className='p-8 bg-slate-300 rounded'>
          <ul>
            {renderedTask}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page