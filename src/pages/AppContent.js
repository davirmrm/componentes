import React, { useEffect, useState } from 'react'

import { listarAlerts } from '../layout/redux/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'

import ButonsPage from './buttons'
import {
  Alert,
  AddAlert,
  ActionForm,
  IcoClose,
  Textarea,
  Input,
  Checkbox,
  Select,
  List,
  ActionsModal,
  Modal,
  Button,
  RadioButton,
  FilterSelect,
  FilterAction,
  Paginate
} from '../component'
const headDefault = [
  {
    colunm: 'id',
    text: 'Identificador',
    className: ''
  },
  {
    colunm: 'name',
    text: 'Nome',
    className: ''
  },
  {
    colunm: 'acoes',
    text: 'Acoes',
    className: 'actions'
  }
]
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
    select: {},
    multiselect: [],
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
            onClick={() => dispatch(AddAlert('success', 'Alerta mensagem' + (alert.length + 1)))}
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <a
            className='App-link'
            onClick={() => dispatch(AddAlert('error', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <Input label='label' name='input' action={e => hanldeChange(e)} value={inputsList.input}>
          <ActionForm action={e => setInputsList({ ...inputsList, input: '' })} title='Limpar'>
            <IcoClose />
          </ActionForm>
        </Input>

        <Input
          label='label senha'
          type={senha ? 'password' : 'text'}
          name='senha'
          action={e => hanldeChange(e)}
          value={inputsList.senha}
        >
          <ActionForm action={e => setSenha(!senha)} title={senha ? 'visivel' : 'invisivel'}>
            <IcoClose />
          </ActionForm>
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
          label='label select '
          name='select'
          action={e => hanldeChange(e)}
          options={selectFake}
          selected={inputsList.select}
          // textCustom={['Selecione', 'Selecionado', 'Selecionados', 'Marcar todos', 'Desmarcar todos']}
          // closeOnSelect={false}
          filter
          // ={{
          //   clean: <IcoClose />,
          //   text: <IcoSearch />,
          //   title: 'Filtrar'
          // }}
        />

        <Select
          label='label multiselect'
          name='multiselect'
          action={e => hanldeChange(e)}
          options={selectFake}
          selected={inputsList.multiselect}
          // textCustom={['Selecione', 'Selecionado', 'Selecionados', 'Marcar todos', 'Desmarcar todos']}
          multiSelect
          // closeOnSelect={false}
          // filter={{
          //   clean: <IcoClose />,
          //   text: <IcoSearch />,
          //   title: 'Filtrar'
          // }}
        >
          <FilterSelect
            // clean={<IcoClose />}
            // filter={<IcoSearch />}
            action={e => setselectFake(FilterAction(selectFakeDefault, e))}
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

      <div>
        <List
          head={headDefault}
          content={selectFakeDefault}
          listActions={e => (
            <div className='acoes'>
              <Button color='success' action={() => console.log(e, 'MERTA')}>
                Learn React success
              </Button>
            </div>
          )}
        />
        <Paginate />
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
        <ActionsModal>
          <Button
            color='success'
            action={() => dispatch(AddAlert('success', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
          >
            Learn React success
          </Button>
          <Button
            color='danger'
            action={() => dispatch(AddAlert('error', `<strong>Alerta</strong> mensagem ${alert.length + 1}`))}
          >
            Learn React error
          </Button>
        </ActionsModal>
      </Modal>
    </div>
  )
}
