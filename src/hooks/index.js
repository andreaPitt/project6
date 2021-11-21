import React from 'react';
import { Link } from 'react-router-dom';

import Counter from '../hooks/Counter';
import TodoList from '../hooks/TodoList';


function Hooks() {
    return <>
    <Link to={'/'} className={'App-link'}>Back</Link>
        <h1>Hooks</h1>
        <div className="content">
            <Counter />
            <TodoList />
        </div>
    </>
}

export default Hooks;