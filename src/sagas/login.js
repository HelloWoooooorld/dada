/* eslint-disable no-param-reassign */
import { put, takeEvery, call } from 'redux-saga/effects'
import { LOAD_DATA } from '../redux/actions/constants'
import { putData, putComments } from '../redux/actions/Login'
import { getPost, getTodo, getComent } from '../api/Auth/index'

function* workedLoadPost() {
  const todo = yield call(getPost)
  yield put(putData(todo))
}

function* workedLoadComment() {
  const comment = yield call(getComent)
  yield put(putComments(comment))
}

function* loginWatcher() {
  yield takeEvery(LOAD_DATA, workedLoadPost)
  yield takeEvery(LOAD_DATA, workedLoadComment)
}

export default loginWatcher
