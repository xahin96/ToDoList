import { useState } from 'react';
import TodoList from './ToDoList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList></TodoList>
    </>
  )
}

export default App
