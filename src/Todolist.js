import React from 'react';

const Todolist = ({ todos, deletehandler }) => {
  return (
    <div style={styles.todoList}>
      {todos.map((todo, index) => (
        <div key={index} style={styles.todoItem}>
          <h5 style={styles.todoText}>{todo}</h5>
          &nbsp;<button style={styles.deleteButton} onClick={() => deletehandler(index)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  todoList: {
    marginTop: '20px',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  todoText: {
    fontSize: '1.2rem',
    color: '#333',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Todolist;
