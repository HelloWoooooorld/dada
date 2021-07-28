import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import connection from './connection'
import loginReducer from './login'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    connection,
    loginReducer,
  })

export default createRootReducer
