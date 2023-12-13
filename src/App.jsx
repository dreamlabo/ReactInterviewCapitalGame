import './App.css'
import CountryCapitalGame from './components/CountryCapitalGame'
import Header from './components/Header'

const capitals = {
  California: "Sacramento",
  Colorado: "Denver",
  Connecticut: "Hartford",
  Illinois: "Springfield",
  Minnesota: "Saint Paul",
  Washington: "Olympia",
  Hawaii: "Honolulu"
}

function App() {
  return (
    <>
    <Header></Header>
      <h1>State Capital Matching Game</h1>
      <CountryCapitalGame className="section-container" data={capitals}/>
    </>
  )
}

export default App
