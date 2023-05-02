import React, { useState } from 'react'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleSecondNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(event.target.value)
  }

  return (
    <div className='container'>

      <form >
        <div className='name-form-container'>
          <PrimaryInput
            value={firstName}
            onChange={handleFirstNameChange}
            name='First Name'
            label='Nome'
            placeholder='Guilherme'
          />

          <PrimaryInput
            value={secondName}
            onChange={handleSecondNameChange}
            name='Second Name'
            label='Sobrenome'
            placeholder='Goulart'
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput
          value={email}
          onChange={handleEmailChange}
          name='email'
          label='Digite seu e-mail'
          placeholder='example@mail.com'
        />
        <Spacer height="4" />
        <Button colorScheme='green' width="100%">Enviar</Button>
      </form>

    </div>
  )
}

export default App
