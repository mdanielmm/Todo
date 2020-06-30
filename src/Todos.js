import React from 'react'
import './Todos.css'

const Todos = ({todos,deleteTodo}) => {
    
    const todoList = todos.length ? (
        todos.map(elem => {
            return (
                <div className="flex-container">
                    <button className="buttondel" key={elem.id} onClick={() => {deleteTodo(elem.id)}}>X</button>
                    <li className="collectionitemm">{elem.content}</li>
                </div>
            )
        })
    
    ) : (
        <p className="completed">You have completed all your tasks!</p>
    )
    
    return (
        <div className='todoscollection'>
            {todoList}
        </div>
    )
}

export default Todos
