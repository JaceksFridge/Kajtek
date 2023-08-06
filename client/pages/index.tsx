import React, { useState, useEffect } from 'react'

function index() {

  const [mes, setMes] = useState("Loading")

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then(
      response => response.json()
    ).then((data) => {
      console.log(data)
      setMes(data.message)
    })
  }, [])


  return (
    <div className="app">
      <div className="input-block">
        <form action="post">
          <label htmlFor="prompt"></label>
          <input type="text" name="prompt" />
        </form>
      </div>
      <h1>{mes}</h1>
    </div>
  )
}

export default index
