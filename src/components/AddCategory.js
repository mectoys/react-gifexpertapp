import React, {useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({setCategories}) {
    const [inputvalue, setInputvalue] = useState('');

    const handleInputChange=(e)=>{
        setInputvalue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputvalue.trim().length>2){

            setCategories(cats=>[inputvalue,...cats]);
            setInputvalue('');
        }         
    }
    return (
         <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputvalue}
                onChange={handleInputChange}>

           </input>
        </form>
           )
}

//que sea requerido se agrega una regla con proptype
//que use mis componentes 
AddCategory.prototype={
    setCategories: PropTypes.func.isRequired
}