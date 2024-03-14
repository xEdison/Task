import React, { useState, useEffect } from 'react';
import { Header } from '../Layouts/Header/Header';
import headboard from '../../assets/React.png';
import { Main } from '../Layouts/Main/Main';
import { Footer } from '../Layouts/Footer/Footer';

export const Home = () => {
  // Estado inicial para almacenar las tareas, utilizando localStorage si está disponible
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  // Estado para el filtro de tareas
  const [filterOption, setFilterOption] = useState('todas');

  // Función para crear una nueva tarea
  const createTask = () => {
    const titleInput = document.getElementById('titleInput').value;
    const descriptionInput = document.getElementById('descriptionInput').value;
    const newTask = { id: tasks.length + 1, title: titleInput, description: descriptionInput, completed: false };
    setTasks([...tasks, newTask]);
    // Guardar tareas en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    // Limpiar campos de entrada
    document.getElementById('titleInput').value = '';
    document.getElementById('descriptionInput').value = '';
  };

  // Función para marcar una tarea como completada
  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    // Guardar tareas actualizadas en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Función para filtrar las tareas
  const filterTasks = () => {
    switch (filterOption) {
      case 'pendientes':
        return tasks.filter(task => !task.completed);
      case 'resueltas':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <>
      <Header>
        <h1 className='title'>Lista de tareas</h1>
        <img className='React' src={headboard} alt="headboard" />
      </Header>
      <Main>
        <div className="tasks">
          <div className='Title-Tasks'>
            <label >Titulo de la Tarea:</label>
            <input id="titleInput" className='input' type="text" placeholder="Ingrese título de tarea aquí" />
          </div>
          <div className='description-Tasks'>
            <label>Descripcion de la Tarea:</label>
            <input id="descriptionInput" className='input' type="text" placeholder="Ingrese descripción de tarea aquí" />
          </div>
          <div className="button">
            <button type="button" onClick={createTask}>Crear tarea</button>
          </div>
        </div>

        <div className="options">
          <label htmlFor="options">Filtrar:</label>
          <select id="options" onChange={(e) => setFilterOption(e.target.value)}>
            <option value="todas">Todas las tareas</option>
            <option value="pendientes">Pendientes</option>
            <option value="resueltas">Resueltas</option>
          </select>
        </div>

        <div className="container">
          <ul>
            {filterTasks().map(task => (
              <li key={task.id} className={task.completed ? 'completed' : ''} onClick={() => toggleCompleted(task.id)}>
                <div className={`circle ${task.completed ? 'completed-blue' : 'uncompleted-red'}`} />
                <label>{task.title}: {task.description}</label>
                <input type="checkbox" checked={task.completed} readOnly />
              </li>
            ))}
          </ul>
        </div>

        {filterTasks().length === 0 && <p>No hay tareas pendientes.</p>}
      </Main>

      <Footer>
        <h1 className='Titlee'>Edison AA</h1>
      </Footer>
    </>
  );
};