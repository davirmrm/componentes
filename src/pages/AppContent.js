import React, { useEffect, useState } from 'react'
import { Alert, Add } from '../component/alert'
import { Modal, Actions } from '../component/modal'
import { listarAlerts } from '../layout/redux/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import { Button } from '../component/button'
import { Input, Action, Textarea, Checkbox, RadioButton } from '../component/form'

import ButonsPage from './buttons'
import { IcoSearch, IcoClose } from '../component/icon'
import { Select, Filter, filterAction } from '../component/form/select'
const selectFakeDefault = [
  {
    id: 1,
    name: 'item 1'
  },
  {
    id: 2,
    name: 'item 2'
  },
  {
    id: 3,
    name: 'item 3'
  }
]
export default () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [senha, setSenha] = useState(false)
  const [inputsList, setInputsList] = useState({
    input: '',
    senha: '',
    select: [],
    checkboxg: [],
    checkboxSwitchg: [],
    radio: {}
  })
  const [selectFake, setselectFake] = useState(selectFakeDefault)
  const alert = useSelector(state => state.alerts)

  useEffect(() => {
    dispatch(listarAlerts())
  }, [dispatch])

  const hanldeChange = e => {
    setInputsList({ ...inputsList, [e.target.name]: e.target.value })
  }
  console.log(inputsList, 'inputsList')
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
            <IcoClose />
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
            <IcoClose />
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

        <Textarea label='label textarea' name='textarea' action={e => hanldeChange(e)} value={inputsList.textarea} />

        <Select
          label='label textarea'
          name='select'
          action={e => hanldeChange(e)}
          options={selectFake}
          selected={inputsList.select}
          // textCustom={['Selecione', 'Selecionado', 'Selecionados', 'Marcar todos', 'Desmarcar todos']}
          multiSelect
          // closeOnSelect={false}
          // filter={{
          //   clean: <IcoClose />,
          //   text: <IcoSearch />,
          //   title: 'Filtrar'
          // }}
        >
          <Filter
            // clean={<IcoClose />}
            // filter={<IcoSearch />}
            action={e => setselectFake(filterAction(selectFakeDefault, e))}
            title='Filtrardd'
          />
        </Select>

        <Checkbox
          label='label checkbox'
          // type='number'
          name='checkbox'
          action={e => hanldeChange(e)}
          checked={inputsList.checkbox}
          text={inputsList.checkbox ? 'Ativo' : 'Inativo'}
        />

        <Checkbox
          label='label checkbox group'
          // type='number'
          name='checkboxg'
          action={e => hanldeChange(e)}
          checked={inputsList.checkboxg}
          options={selectFakeDefault}
        />

        <Checkbox
          label='label checkbox Switch'
          type='switch'
          name='checkboxSwitch'
          action={e => hanldeChange(e)}
          checked={inputsList.checkboxSwitch}
          text={inputsList.checkboxSwitch ? 'Ativo' : 'Inativo'}
        />

        <Checkbox
          label='label checkbox Switch'
          type='switch'
          name='checkboxSwitchg'
          action={e => hanldeChange(e)}
          checked={inputsList.checkboxSwitchg}
          options={selectFakeDefault}
        />

        <RadioButton
          label='label radio'
          name='radio'
          action={e => hanldeChange(e)}
          checked={inputsList.radio}
          options={selectFakeDefault}
        />
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
