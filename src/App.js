import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {
  const [task, settask] = useState("");
  const [todos, settodos] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // Prevent adding empty tasks
    const newtodos = [...todos, task];
    settodos(newtodos);
    settask("");
  };

  const handler = (e) => {
    settask(e.target.value);
  };

  const deletehandler = (indexvalue) => {
    const newTodos = todos.filter((_, index) => index !== indexvalue);
    settodos(newTodos);
  };

  return (
    <div style={styles.appContainer}>
      <center>
        <h1 style={styles.title}>Todo List Application</h1>
        <form onSubmit={submithandler} style={styles.form}>
          <input
            type="text"
            value={task}
            onChange={handler}
            style={styles.input}
            placeholder="Enter a task"
          />
          <input type="submit" value="ADD" style={styles.addButton} />
        </form>
        <Todolist todos={todos} deletehandler={deletehandler} />
      </center>
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    color: 'orange',
  },
  form: {
    marginTop: '20px',
  },
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  addButton: {
    padding: '10px 15px',
    marginLeft: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
