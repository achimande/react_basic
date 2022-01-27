import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (event) => {
        console.log(event.target.checked)
        this.props.checkAllTodo(event.target.checked)
    }
    chearAllDone = () => {
        this.props.clearAllDone()
    }
    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((preValue, current) => preValue + (current.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={todos.length === doneCount && total > 0 ? true : false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成 {doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.chearAllDone}>
                    清除已完成任务
                </button>
            </div>
        )
    }
}
