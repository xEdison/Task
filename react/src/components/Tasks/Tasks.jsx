import React from 'react';
import ItemTask from '../ItemTask/ItemTask';

const Tasks = ({ tasks, toggleCompleted }) => {
  return (
    <div className="container">
      <ul>
        {tasks.map(task => (
          <ItemTask key={task.id} task={task} toggleCompleted={toggleCompleted} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
