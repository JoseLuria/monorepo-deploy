import { useState } from 'react'
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
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default App
