import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import TodoList from './TodoList';

class Classes extends React.Component {
    render() {
        return <>
            <Link to={'/'} className={'App-link'}>Back</Link>
            <h1>Classes</h1>
            <div className="content">
                <Counter />
                <TodoList />
            </div>
        </>
    }
}

export default Classes;