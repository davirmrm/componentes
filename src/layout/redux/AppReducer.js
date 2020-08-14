import { CARREGANDO_ALERT } from './AppActions'

const initialState = {
  alerts: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CARREGANDO_ALERT:
      return { ...state, alerts: payload }
    default:
      return state
  }
}
