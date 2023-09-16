import React, {useEffect, useState} from 'react';

const List = () => {
    const [todos, setTodos] = useState([])

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }


    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div>
            {todos.map((item) => <div
                key={item.id}
                style={{
                    height: '50px',
                    width: '80%',
                    border: '2px solid black',
                    display: 'flex',
                    alignItems: 'center'
                }}>{item.title}</div>)}

        </div>
    )
        ;
};

export default List;
