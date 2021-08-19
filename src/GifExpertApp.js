import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{

    //const categories=['Motu','Thundercats','MaxSteel'];
    const [categories, setCategories] = useState(['']);
    // const handleAdd=()=>{
    //     setCategories([...categories,'Mazinger']);
    // }
    
    return(
        <>
           <h2>Experto</h2> 
           <AddCategory setCategories={setCategories}></AddCategory>
           <hr></hr>
     
           <ol>
            {
                categories.map(category=>(
                     <GifGrid 
                     key={category}
                     category={category}></GifGrid>
                ))
            }
           </ol>
        </>

    );

}

export default GifExpertApp;