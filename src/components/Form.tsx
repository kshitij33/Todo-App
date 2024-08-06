import { AddCircle } from '@mui/icons-material'
import { FormEventHandler } from 'react'

interface formPropTypes {
    createTodo: FormEventHandler
    input:string,
    setInput: (input: string) => void
}

const Form = ({ createTodo, input, setInput }: formPropTypes) => {

  return (
    <form onSubmit={createTodo} className='flex justify-between bg-blue-300 p-4 rounded-lg items-center'>
        <input onChange={(e)=>{setInput(e.target.value)}} value={input} className='w-full text-xl rounded-lg p-[3px]' />
        <button className='p-2 text-gray-400'><AddCircle /></button>
    </form>
  )
}

export default Form