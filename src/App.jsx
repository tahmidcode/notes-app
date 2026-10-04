import React, { useState } from 'react'
// const [first, setfirst] = useState(second)
const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const [message, setMessage] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault();
    if (title.trim() === '') {
      setMessage('Please enter a title.')
      return
    }
    if (details.trim() === '') {
      setMessage('Please enter the note details.')
      return
    }
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
    setMessage('')
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='lg:h-screen lg:flex bg-black text-white'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex gap-4 lg:w-1/2 p-10 flex-col items-start bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl'
      >
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        <input type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} 
        />
        <textarea
         placeholder='Enter details here' 
         className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
         />
        <button
        className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >Add Note</button>
              {message && (
        <p className='text-red-500 text-sm mt-2'>{message}</p>
      )}
      </form>
      <div className='lg:w-1/2 lg:border-1-2 p-10'>
         <h1 className='text-4xl font-bold'>Recent Notes</h1>
         <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function(elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4"
            style={{
              backgroundImage:
                "url('/sticky-note.png')",
  }}
            >
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button
              onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
              >Delete</button>
            </div>
          })}
         </div>
      </div>
    </div>
  )
}

export default App