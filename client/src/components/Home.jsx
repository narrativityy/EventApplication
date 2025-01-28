import React, { useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=coke&search_simple=1&jqm=1`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {/* Navbar */}
      <div className='m-4 p-2 navbar flex justify-between align-center gap-2 bg-slate-300 rounded'>
        <h1>Food Facts</h1>
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home