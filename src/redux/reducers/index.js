import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import connection from './connection'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    connection,
  })

export default createRootReducer
