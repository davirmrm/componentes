import { combineReducers } from 'redux'
import appState from './redux/AppReducer'
import alerts from '../component/alert/alertsRedux'

export const rootReducer = combineReducers({
  alerts,
  appState
})

export default rootReducer
