import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import LabeledInput from './components/LabeledInput'
import Courses from './components/Courses'
import { post } from './utils/fetch'
import Nps from './components/Nps'

function App() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [serie, setSerie] = useState<string>('');
  const [selection, setSelection] = useState<string[]>([]);
  const [nps, setNps] = useState<number>(-1);
  const [sending, setSending] = useState<boolean>(false);

  const handleSending = async () => {
    if(
      name.length > 2 &&
      phone.length > 13 &&
      serie.length > 0 &&
      nps > -1 &&
      selection.length > 0
    ) {
      setSending(true);
      await post({
        "std_name": name || "----",
        "std_phone_number": phone || "(00) 0000-0000",
        "std_series": serie || "----",
        "std_nps": nps,
        "std_fst_choice": selection[0] || "----",
        "std_scd_choice": selection[1] || "----",
        "std_trd_choice": selection[2] || "----",
      });
      alert(`Obrigado por sua avaliação, ${name.split(' ')[0]}!`);
      window.location.reload();
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.toUpperCase();
    setName(newName);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      value = value.replace(/(\d*)/, '($1');
    }
    setPhone(value);
  }

  const handleSerieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSerie = e.target.value.toUpperCase();
    setSerie(newSerie);
  }

  return (
    <div className='container'>
      <Header />
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Que bom termos você aqui conosco!<br/>
        Se interessou por alguma área? Deixe seu contato!</h1>
        <div className='container-form-name'>
          <LabeledInput required={true} disabled={sending} label='Nome Completo' value={name} onChange={(e) => handleNameChange(e)}/>
        </div>
        <div className='container-form-phone-serie'>
          <LabeledInput required={true} maxLength={15} disabled={sending} label='Telefone' value={phone} onChange={(e) => handlePhoneChange(e)}/>
          <LabeledInput required={true} disabled={sending} label='Série' value={serie} onChange={(e) => handleSerieChange(e)}/>
        </div>
        <h1>Como você avalia sua experiência no evento?</h1>
        <Nps nps={nps} setNps={setNps} />
        <h1>Escolha até três áreas que te interessaram:</h1>
        <div className='container-form-courses'>
          <Courses selection={selection} setSelection={setSelection} />
        </div>
        <Button disabled={sending} onClick={() => handleSending()} type='submit'>Enviar!</Button>
      </form>
    </div>
  )
}

export default App
