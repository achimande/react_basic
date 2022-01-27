import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: '抽烟', done: true },
            { id: '002', name: '喝酒', done: false },
            { id: '003', name: '烫头', done: true },
        ],
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        this.setState({ todos: [todoObj, ...todos] })
    }
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
        // todos.splice(index, 1)
        // this.setState({ todos: todos })
    }
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                todoObj.done = done
            }
            return todoObj
        })
        this.setState({ todos: newTodos })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }

    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Add addTodo={this.addTodo} />
                    <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}
