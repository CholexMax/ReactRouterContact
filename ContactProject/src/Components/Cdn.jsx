import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Cdn() {
  let state=useState("")
  let userName=state[0]
  let setUserName=state[1]
  return (
    <div>
        <input type="text" value={userName} onInput={(e) =>setUserName(e.target.value)} placeholder='enter the github username'/>
        <NavLink to={`/info/${userName}`}>Showcase Github Details</NavLink>
    </div>
  )
}

export default Cdn