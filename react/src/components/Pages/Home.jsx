import React from 'react'
import { Header } from '../Layouts/Header/Header'
import headboard from '../../assets/React.png'
import { Main } from '../Layouts/Main/Main'

export const Home = () => {
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
                <input className='input' type="text"  placeholder="Ingrese titulo de tarea aquí"/>  
            </div>
            <div className='description-Tasks'>
                <label>Descripcion de la Tarea:</label>
                <input className='input' type="text"  placeholder="Ingrese descrpcion de tarea aquí"/> 
            </div>
            <div className="button">
            <button  type="button">Crear tarea</button>
            
            
            </div>
        </div>
        <label for="opciones">Filtrar:</label>
        <select id="opciones">
            <option value="opcion1">Todas Las tareas</option>
            <option value="opcion2">Pendientes</option>
            <option value="opcion3">Opción 3</option>
        </select>
        

       
    </Main>
    </>
  )
}
