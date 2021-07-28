/* eslint-disable arrow-body-style */
import { PUT_DATA, LOAD_DATA, PUT_COMMENTS } from './constants'

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  }
}

export const putComments = (data) => {
  return {
    type: PUT_COMMENTS,
    payload: data,
  }
}

export const loadData = () => {
  return {
    type: LOAD_DATA,
  }
}
