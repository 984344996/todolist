/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/29
 **/
import { createStore ,applyMiddleware } from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

export default createStore(reducer, enhancer)