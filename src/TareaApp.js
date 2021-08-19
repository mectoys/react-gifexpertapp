import React, { useState } from 'react'
import AddTareas from './components/AddTareas'

export const TareaApp = () => {
    const [Tareas,SetTareas]=useState(['Hacer Ejercicios','Bañarme'])
    return (
        <>
            <h2>tareas</h2>
            {/* aca es componente controles */}
            <AddTareas SetTareas={SetTareas} ></AddTareas>
            <hr></hr>

            <ol>
               {
                //    Llenado de la información
                   Tareas.map(accion =>{
                       return <li key={accion}>{accion}</li>
                   })
               }

            </ol>
        </>
    )
}
