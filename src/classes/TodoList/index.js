import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTodo: '',
            todos:[]
        };
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTodo() {
        this.setState((state) => ({
            todos: [...state.todos, state.currentTodo],
            currentTodo: '',
        }))
    };

    handleChange(event) {
        this.setState({
            currentTodo: event.target.value || ''
        });
    }

    render() {
        const todos = this.state.todos.length > 0 ? (
            <ul>
                {this.state.todos.map(item => <li key={Math.random()}>{item}</li>)}
            </ul>
        ) : <div></div>;
        return <div className="container">
            <h2>Todos</h2>
            <input onChange={this.handleChange} value={this.state.currentTodo} />
            <button onClick={this.addTodo}>Add Todo</button>
            {todos}
        </div>
    }
}

export default TodoList;