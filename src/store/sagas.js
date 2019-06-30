/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/30
 **/
import {  put,takeEvery } from 'redux-saga/effects'
import { INIT_LIST_ACTION } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* initAction() {
  try {
    const res = yield axios.get('/api/list')
    const action = getListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log(e)
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* todoSaga() {
  yield takeEvery(INIT_LIST_ACTION, initAction);
}

export default todoSaga