import React, { useEffect } from 'react'
import logo from './logo.svg'
import { Alert, Add } from '../component/alert'
import { listarAlerts } from '../layout/redux/AppActions'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const dispatch = useDispatch()
  const alert = useSelector(state => state.alerts)

  useEffect(() => {
    dispatch(listarAlerts())
  }, [dispatch])

  return (
    <div className='App'>
      <Alert />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
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
          onClick={() => dispatch(Add('error', 'Alerta mensagem' + (alert.length + 1)))}
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
