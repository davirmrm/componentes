import React, { useEffect, useState } from 'react'
import { Alert, Add } from '../component/alert'
import { Modal, Actions } from '../component/modal'
import { listarAlerts } from '../layout/redux/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import { Button } from '../component/button'
import { IcoCross } from '../component/icon'

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
        <div>
          <Button color='primary'>Learn React primary</Button>
          <Button color='secondary'>Learn React secondary</Button>
          <Button color='warning'>Learn React warning</Button>
          <Button color='danger'>Learn React danger</Button>
          <Button color='success'>Learn React success</Button>
        </div>
        <div>
          <Button color='primary' variant='outline'>
            Learn React primary
          </Button>
          <Button color='secondary' variant='outline'>
            Learn React secondary
          </Button>
          <Button color='warning' variant='outline'>
            Learn React warning
          </Button>
          <Button color='danger' variant='outline'>
            Learn React danger
          </Button>
          <Button color='success' variant='outline'>
            Learn React success
          </Button>
        </div>
        <div>
          <Button color='primary' variant='outlined'>
            Learn React primary
          </Button>
          <Button color='secondary' variant='outlined'>
            Learn React secondary
          </Button>
          <Button color='warning' variant='outlined'>
            Learn React warning
          </Button>
          <Button color='danger' variant='outlined'>
            Learn React danger
          </Button>
          <Button color='success' variant='outlined'>
            Learn React success
          </Button>
        </div>
        <div>
          <Button color='primary' type='link'>
            Learn React primary
          </Button>
          <Button color='secondary' type='link'>
            Learn React secondary
          </Button>
          <Button color='warning' type='link'>
            Learn React warning
          </Button>
          <Button color='danger' type='link'>
            Learn React danger
          </Button>
          <Button color='success' type='link'>
            Learn React success
          </Button>
        </div>
        <div>
          <Button color='primary' type='link' variant='outlined'>
            Learn React primary
          </Button>
          <Button color='secondary' type='link' variant='outlined'>
            Learn React secondary
          </Button>
          <Button color='warning' type='link' variant='outlined'>
            Learn React warning
          </Button>
          <Button color='danger' type='link' variant='outlined'>
            Learn React danger
          </Button>
          <Button color='success' type='link' variant='outlined'>
            Learn React success
          </Button>
        </div>
        <div>
          <Button color='primary' type='btn-icon'>
            <IcoCross />
          </Button>
          <Button color='secondary' type='btn-icon'>
            <IcoCross />
          </Button>
          <Button color='warning' type='btn-icon'>
            <IcoCross />
          </Button>
          <Button color='danger' type='btn-icon'>
            <IcoCross />
          </Button>
          <Button color='success' type='btn-icon'>
            <IcoCross />
          </Button>
        </div>
        <div>
          <Button color='primary' type='btn-icon' variant='outlined'>
            <IcoCross />
          </Button>
          <Button color='secondary' type='btn-icon' variant='outlined'>
            <IcoCross />
          </Button>
          <Button color='warning' type='btn-icon' variant='outlined'>
            <IcoCross />
          </Button>
          <Button color='danger' type='btn-icon' variant='outlined'>
            <IcoCross />
          </Button>
          <Button color='success' type='btn-icon' variant='outlined'>
            <IcoCross />
          </Button>
        </div>
        <div>
          <Button color='primary' type='btn-icon' variant='outline'>
            <IcoCross />
          </Button>
          <Button color='secondary' type='btn-icon' variant='outline'>
            <IcoCross />
          </Button>
          <Button color='warning' type='btn-icon' variant='outline'>
            <IcoCross />
          </Button>
          <Button color='danger' type='btn-icon' variant='outline'>
            <IcoCross />
          </Button>
          <Button color='success' type='btn-icon' variant='outline'>
            <IcoCross />
          </Button>
        </div>

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
      </header>
    </div>
  )
}
