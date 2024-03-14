import React from 'react';

const Filter = ({ filterOption, setFilterOption }) => {
  return (
    <div className="options">
      <label htmlFor="options">Filtrar:</label>
      <select id="options" onChange={(e) => setFilterOption(e.target.value)} value={filterOption}>
        <option value="todas">Todas las tareas</option>
        <option value="pendientes">Pendientes</option>
        <option value="resueltas">Resueltas</option>
      </select>
    </div>
  );
};

export default Filter;
