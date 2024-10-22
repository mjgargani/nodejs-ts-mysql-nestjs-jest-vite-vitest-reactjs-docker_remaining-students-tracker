import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Input from './components/Input'
import LabeledInput from './components/LabeledInput'

function App() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [serie, setSerie] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }

  const handleSerieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerie(e.target.value);
  }

  return (
    <div className='container'>
      <Header />
      <form>
        <h1>Que bom termos você aqui conosco!<br/>
        Se interessou por alguma área? Deixe seu contato!</h1>
        <div className='container-form-name-phone'>
          <LabeledInput disabled={sending} label='Nome Completo' value={name} onChange={(e) => handleNameChange(e)}/>
          <LabeledInput disabled={sending} label='Telefone' value={phone} onChange={(e) => handlePhoneChange(e)}/>
        </div>
        <div className='container-form-serie'>
          <LabeledInput disabled={sending} label='Série' value={serie} onChange={(e) => handleSerieChange(e)}/>
        </div>
      </form>
    </div>
  )
}

export default App