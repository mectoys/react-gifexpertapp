import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function AddTareas  ({SetTareas}) {

    const [inputvalue,setinputvalue]=useState('')

    const handleInputChange=(e)=>{
        setinputvalue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        SetTareas(cate=>[...cate,inputvalue]);
        setinputvalue('');
            
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputvalue}                
                onChange={handleInputChange}
             >
            
            </input>            
        </form>
        </>
    )
}
