/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/30
 **/
import React, { Component } from 'react'
import store from './store/indx'
import { changeVlaAction ,addTodoItemAction ,deleteTodoItemAction,initListAction } from './store/actionCreators'

class TodoList extends Component{
  constructor (props){
    super(props)
    this.handleChangeVal = this.handleChangeVal.bind(this)
    this.handleStore = this.handleStore.bind(this)
    this.addTodoItem = this.addTodoItem.bind(this)
    this.deleteTodoItem = this.deleteTodoItem.bind(this)

    this.state = store.getState()
    store.subscribe(this.handleStore)
  }

  render(){
    return(
      <div>
        <div>
          <input onChange={this.handleChangeVal} value={this.state.inputVal} type="text"/>
          <button onClick={this.addTodoItem}>提交</button>
        </div>
          <ul>
            {
              this.state.list && this.state.list.map((item,index) => {
                return <li onClick={() => {this.deleteTodoItem(index)}} key={index}>{item}</li>
              })
            }
          </ul>
      </div>
    )
  }

  componentDidMount () {
    console.log(this.state)
    store.dispatch(initListAction())
  }
  handleChangeVal(e) {
    store.dispatch(changeVlaAction(e.target.value))
  }
  addTodoItem() {
    store.dispatch(addTodoItemAction())
  }
  deleteTodoItem(index) {
    store.dispatch(deleteTodoItemAction(index))
  }
  handleStore(){
    this.setState(store.getState())
  }
}

export default TodoList