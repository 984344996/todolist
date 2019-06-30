/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/30
 **/
import { HANDLE_CHANGE_VAL, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'

export const changeVlaAction = (value) => ({
  type: HANDLE_CHANGE_VAL,
  value
})

export const addTodoItemAction = ()=>({
  type: ADD_TODO_ITEM
})

export const deleteTodoItemAction = (index)=>({
  type: DELETE_TODO_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_INIT_LIST,
  data
})

export const initListAction = () => ({
  type: INIT_LIST_ACTION
})