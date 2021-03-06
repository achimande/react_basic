import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './index.css'
export default class Add extends Component {
    handleKeyUp = (event) => {
        let { value } = event.target
        if (event.keyCode !== 13) return
        if (value.trim() === '') return alert('输入内容不能为空')
        const todoObj = { id: uuidv4(), name: value, done: false }
        console.log(todoObj)
        this.props.addTodo(todoObj)
        event.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
