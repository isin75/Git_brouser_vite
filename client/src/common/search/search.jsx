import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const handleInput = (event) => {
    const inputUser = event.target.value
    setUser(inputUser)
  }
  const handleClick = () => {
    navigate(`/${user}`)
  }
  const handleEnterKeyPress = (event) => {
    if (user !== '') {
      if (event.key === 'Enter') {
        handleClick()
      }
    }
  }
  return (
    <div className="align-middle space-x-2">
      <input
        id="input-field"
        type="text"
        value={user ? user.trim() : ''}
        placeholder="Enter user name"
        onChange={handleInput}
        onKeyPress={handleEnterKeyPress}
        className="bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none"
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
        type="button"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  )
}

export default Search
