
import './App.css'
import CountryCapitalGame from './components/CountryCapitalGame'

const capitals = {
  Colorado: "Denver",
  Washington: "Olympia",
  Hawaii: "Honolulu"
}

function App() {
  return (
    <>
      <h1>State Capital Game</h1>
      <CountryCapitalGame data={capitals}/>
    </>
  )
}

export default App
