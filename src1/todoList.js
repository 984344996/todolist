/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/29
 **/
import React, { Component } from 'react'
import store from './store/inde'
import { getInputChangeAction ,getAddItemAction ,getDeleteItemAction ,initListAction } from './store/actionCreators'
import TodoListUI from './todoListUI'

class TodoList extends Component{
  constructor (props){
    super(props)
    this.handleChangeVal = this.handleChangeVal.bind(this)
    this.handleStore = this.handleStore.bind(this)
    this.deleteTodoItem = this.deleteTodoItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.state = store.getState()

    store.subscribe(this.handleStore)
  }
  render(){
    return(
      <TodoListUI
        inputVal = {this.state.inputVal}
        list = {this.state.list}
        handleChangeVal = {this.handleChangeVal}
        deleteTodoItem = {this.deleteTodoItem}
        addItem = {this.addItem}
      ></TodoListUI>
    )
  }

  componentDidMount () {
    store.dispatch(initListAction())
  }
  handleChangeVal(e){
    store.dispatch(getInputChangeAction(e.target.value))
  }
  addItem(){
    store.dispatch(getAddItemAction())
  }
  deleteTodoItem(index){
    store.dispatch(getDeleteItemAction(index))
  }
  handleStore(){
    this.setState(store.getState())
  }
}

export default TodoList