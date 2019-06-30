/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/29
 **/
import { HANDLE_CHANGE_VAL, ADD_TODO_ITEM ,DELETE_TODO_ITEM ,INIT_LIST } from './actionTypes'
const defaultState = {
  inputVal: 123,
  list: [1,2,3]
}
export default (state = defaultState, action) => {
  if(action.type === HANDLE_CHANGE_VAL){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.val
    return newState
  }
  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputVal)
    newState.inputVal = ''
    return newState
  }
  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  if(action.type === INIT_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}