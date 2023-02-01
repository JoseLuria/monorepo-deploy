import { useState } from 'react'
import { Button } from '../components'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  const fetchData = async () => {
    if (message !== '') return
    const { data } = await axios.get('/api/hello')
    setMessage(data.message)
  }

  return (
    <div>
      {message !== '' && <h1>{message}</h1>}
      {/* <Button onClick={fetchData}>Fetch Data</Button> */}
    </div>
  )
}

export default App
