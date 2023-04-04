import React from 'react'
import {useState} from 'react'
import { IProduct } from '../model'

const Card = ({data}:{data:IProduct}) => {

    const [showMore, setShowMore] = useState(false)

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
        <img className="rounded-t-lg h-60 w-96" src={data.image} alt="" />
   
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.category}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.title}</p>
        <button style={!showMore?{display:  "block"}:{display:"none"}} onClick={()=>setShowMore(!showMore)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  More...
</button>
{showMore? <div>
        <p className='mb-6'>{data.description}</p>
        <button  onClick={()=>setShowMore(!showMore)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hide
</button>
      </div>: ""}
      
    </div>
</div>
  )
}

export default Card