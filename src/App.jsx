import React from "react"
import Grid from "@mui/material/Grid"


import jokesData from "./arrays/jokesData"
import Joke from "./components/Joke"

import boxes from './arrays/boxes'
import Box from './components/Box'

import messages from './arrays/messages'

import Form from './components/Form'

import Signup from './components/Signup'

import Api from './components/Api'

import WinTrack from './components/WinTrack'


function App() {

  const jokeElements = jokesData.map(joke => {
     return (
         <Joke 
             key={joke.id}
             setup={joke.setup} 
             punchline={joke.punchline}
         />
     )
   })

  const [squares, setSquares] = React.useState(boxes)
  
  function toggle(id) {
       setSquares(prevSquares => {
         return prevSquares.map((square) => {
           return square.id === id ? {...square, on:!square.on} : square
         })
       })
   }

  const squareElements = squares.map(square => (
       <Box 
           key={square.id}
           on={square.on} 
           toggle={() => toggle(square.id)}
       />
   ))
  
  return (
      <main>
      {/* Not the prettiest execution, but it works fine for its purpose. Any console log entries SHOULD have a number so the user can identify which grid item printed it. */}
        <Grid container spacing={1}>
          <Grid item xs={4} className="gridSide">
            
              <h1>1. Jokes</h1>
              <h3 className="explanation">Click the button to see the punchline.</h3>
              {jokeElements}
           
          </Grid>
          <Grid item xs={4} className="gridMiddle">
              <h1>2. Squares</h1>
              <h3 className="explanation">Click the squares to change the background color of the square.</h3>
              {squareElements}
          </Grid>
          <Grid item xs={4} className="gridSide">
              <h1>3. Messages</h1>
              <h3 className="explanation">
                If the "messages" array is empty, the website should say "you're all caught up". 
                If the messages array has a single entry, it should read "You have 1 unread message"
                If the message array has multiple entries, it should read "You have X unread messages" where X is the number of entries in the array.<br></br><br></br>
                The "messages" array is in the "arrays" folder. You can edit the array there to get the other outputs.
              </h3>
                <div>
                  {
                    messages.length === 0 
                    ? <h1>You're all caught up!</h1>
                    : <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1>
                  }
                </div>
          </Grid>
          <Grid item xs={4} className="gridSide">
              <h1>4. Forms practice</h1>
              <h3 className="explanation">A simple form that will console log the information put into it after the user presses the "Submit" button</h3>
              <Form></Form>
          </Grid>
          <Grid item xs={4} className="gridMiddle">
              <h1>5. Signup form</h1>
              <h3 className="explanation">A simple sign-up form. It will console log certain messages depending on user input. 
              A failure message if the passwords don't match. Confirmation of signing up if the passwords match. 
              And a confirmation and a thank you if the passwords match and the user chooses to subscribe to the newsletter</h3>
              <Signup></Signup>
          </Grid>
          <Grid item xs={4} className="gridSide">
              <h1>6. API practice</h1>
              <h3 className="explanation"></h3>
              <Api></Api>
          </Grid>
          <Grid item xs={4} className="gridSide">
              <h1>7. Window Tracker</h1>
              <h3 className="explanation">A simple functionality that should track the width of the window. So change the width and see if it works.</h3>
              <WinTrack></WinTrack>
          </Grid>
        </Grid>
      </main>
  )
}

export default App
