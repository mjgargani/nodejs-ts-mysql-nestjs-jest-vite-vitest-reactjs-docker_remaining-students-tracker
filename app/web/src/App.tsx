import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
    <Button title="Click me" onClick={() => console.log('Button clicked')} />
    </>
  )
}

export default App
