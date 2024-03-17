import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => {
        setId(id + 1);
      }}>Next</button>
        <Todo id={id} />
    </div> 
  )
}
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(API + id).then(async (res) => 
    {
      const json = res.json();
      setTodo(json.todo);
    })
  }, [id])
  
  return (
    <div>
      <h1>
        {todo.title}
      </h1>
      <h5>
        {todo.description}
      </h5>
    </div>
  )
}

export default App;