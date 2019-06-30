/**
 * description：
 * ceated by hh.todd@qq.com on 2019/6/29
 **/
import React from 'react'
import 'antd/dist/antd.css';
import './index.css';
import { Input, Button ,List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div>
      <div className='input-area'>
        <Input onChange={props.handleChangeVal} value={props.inputVal} placeholder='todo info'/>
        <Button type='primary' onClick={props.addItem}>submit</Button>
      </div>
      <List
        className='list'
        bordered
        dataSource={props.list}
        renderItem={(item,index) => <List.Item onClick={() => {props.deleteTodoItem(index)}}>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUI