/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/30
 **/
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import todoSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(todoSaga)

export default store