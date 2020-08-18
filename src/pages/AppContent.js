import React, { useEffect, useState } from 'react'
import { Alert, Add } from '../component/alert'
import { Modal, Actions } from '../component/modal'
import { listarAlerts } from '../layout/redux/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import { Button } from '../component/button'
import { Input, Action, Textarea } from '../component/form'

import ButonsPage from './buttons'
import { IcoCross } from '../component/icon'

export default () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [senha, setSenha] = useState(false)
  const [inputsList, setInputsList] = useState({ input: '', senha: '' })
  const alert = useSelector(state => state.alerts)

  useEffect(() => {
    dispatch(listarAlerts())
  }, [dispatch])

  const hanldeChange = e => {
    setInputsList({ ...inputsList, [e.target.name]: e.target.value })
  }
  console.log(inputsList)
  return (
    <div>
      <Alert />
      <div className='App'>
        <header className='App-header'>
          <Logo />
          <p onClick={() => setOpen(!open)}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            onClick={() => dispatch(Add('success', 'Alerta mensagem' + (alert.length + 1)))}
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <a
            className='App-link'
            onClick={() => dispatch(Add('error', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <Input label='label' name='input' action={e => hanldeChange(e)} value={inputsList.input}>
          <Action action={e => setInputsList({ ...inputsList, input: '' })} title='Limpar'>
            <IcoCross />
          </Action>
        </Input>
        <Input
          label='label senha'
          type={senha ? 'password' : 'text'}
          name='senha'
          action={e => hanldeChange(e)}
          value={inputsList.senha}
        >
          <Action action={e => setSenha(!senha)} title={senha ? 'visivel' : 'invisivel'}>
            <IcoCross />
          </Action>
        </Input>

        <Input label='label data' type='date' name='data' action={e => hanldeChange(e)} value={inputsList.data} />
        <Input
          label='label numero'
          type='number'
          name='numero'
          action={e => hanldeChange(e)}
          value={inputsList.numero}
        />
        <Textarea label='label textarea' name='numero' action={e => hanldeChange(e)} value={inputsList.numero} />
      </div>

      <ButonsPage />

      <Modal
        title={'Learn React Title'}
        // size='fullScreen'
        open={open}
        close={() => setOpen(false)}
        closeText='Fechar'
      >
        Learn React Content
        <Actions>
          <Button
            color='success'
            action={() => dispatch(Add('success', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
          >
            Learn React success
          </Button>
          <Button
            color='danger'
            action={() => dispatch(Add('error', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
          >
            Learn React error
          </Button>
        </Actions>
      </Modal>
    </div>
  )
}
