import React, { useEffect, useState } from 'react'
import { Alert, Add } from '../component/alert'
import { Modal, Actions } from '../component/modal'
import { listarAlerts } from '../layout/redux/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import { Button } from '../component/button'

export default () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const alert = useSelector(state => state.alerts)

  useEffect(() => {
    dispatch(listarAlerts())
  }, [dispatch])

  return (
    <div className='App'>
      <Alert />
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
        <Modal
          title={'Learn React Title'}
          // size='fullScreen'
          open={open}
          close={() => setOpen(false)}
          closeText='Fechar'
        >
          Learn React Content
          <Actions>
            <Button action={() => dispatch(Add('success', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}>
              Learn React success
            </Button>
            <Button action={() => dispatch(Add('error', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}>
              Learn React error
            </Button>
          </Actions>
        </Modal>
      </header>
    </div>
  )
}
