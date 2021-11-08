// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState, useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  const inputElement = useRef(null);
  const [username, setUsername] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputElement.current.value)
    
  }

  const handleChange = (event) => {
    setUsername(event.target.value.toLowerCase())
    
  }

  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  return (
    <form>
      <div>
        <label>Username:</label>
        <input value={username} onChange={handleChange} ref={inputElement} type="text" />
      </div>
      <button disabled={disabled} onClick={handleSubmit} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
