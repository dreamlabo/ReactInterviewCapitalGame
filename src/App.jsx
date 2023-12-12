import { useState } from 'react'
import './App.css'
import Hello  from "./components/hello"
import CountryCapitalGame from './components/CountryCapitalGame'

const capitals = {
  Colorado: "Denver",
  Washington: "Olympia",
  Hawaii: "Honolulu"
}

function App() {
  return (
    <>
      <Hello/>
      <CountryCapitalGame data={capitals}/>
    </>
  )
}

export default App
