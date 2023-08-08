import React, { useState, useEffect } from 'react'

function index() {

  const [mes, setMes] = useState("Loading")
  const [input, setInput] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/api/prompt", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: input })
      })
      console.log('successfully posted data')

      // server respnonse
      const data = await response.json()
      setMes(data.prompted_data)
      console.log('successfully received data:', mes)

    } catch (error) {
      console.error("Failed to send Form ->", error)
    }
  }


  return (
    <div className="app">
      <div className="input-block">
        <form onSubmit={handleSubmit}>
          <label htmlFor="prompt"></label>
          <input 
            type="text" 
            name="prompt" 
            value={input}
            onChange={handleInput}
          />
          <p>{input}</p>
          <button 
            className="submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <h1>Hi</h1>
      <div className="result">
        <p className="result-text">
          {mes}
        </p>
      </div>
    </div>
  )
}

export default index
