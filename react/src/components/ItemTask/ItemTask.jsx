import React from 'react';

const ItemTask = ({ task, toggleCompleted }) => {
  return (
    <li className={task.completed ? 'completed' : ''} onClick={() => toggleCompleted(task.id)}>
      <div className={`circle ${task.completed ? 'completed' : ''}`} />
      <label>{task.title}: {task.description}</label>
      <input type="checkbox" checked={task.completed} readOnly />
    </li>
  );
};

export default ItemTask;
