/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/29
 **/
import { HANDLE_CHANGE_VAL, ADD_TODO_ITEM ,DELETE_TODO_ITEM ,INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (val) => ({
  type: HANDLE_CHANGE_VAL,
  val
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = () => {
  return (dispatch) => {
    console.log(111)
    axios.get('/api/list').then(res => {
      console.log(res)
      dispatch({
        type: INIT_LIST,
        data: res.data
      })
    })
  }
}