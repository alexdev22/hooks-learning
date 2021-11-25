import { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffect = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => { setData(response.data[0].email) })
  }, [])

  return (
    <>
      <h1>UseEffect</h1>
      <div className='users'>{data}</div>
    </>
  )
}

export default UseEffect
