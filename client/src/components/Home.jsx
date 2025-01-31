import React, { useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [query, setQuery] = useState('')

  const [events, setEvents] = useState([])

  const handleQuery = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/search', { query, city: 'Seattle' })
      .then(res => {
        console.log(res.data)
        setEvents(res.data._embedded.events)
      })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <div>
      {/* Navbar */}
      <div className='m-4 p-2 navbar flex justify-between align-center gap-2 bg-slate-300 rounded'>
        <h1>Event Finder</h1>
        <div>
          <form onSubmit={handleQuery}>
            <input type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
          </form>
        </div>
      </div>

      {/* Events */}
      <div>
        {events.map(event => (
          <div className='m-4' key={event.id}>
            <a className='text-xl text-blue-600 cursor-pointer' href={event.url}><h2>{event.name}</h2></a>
            <p>{event.info}</p>
            <p>{event.dates.start.localDate} at {event.dates.start.localTime}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home