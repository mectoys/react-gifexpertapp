import React  from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

     
    const {data:images,loading}= useFetchGifs(category);
 
    //el use effect controla la ejecucion de cierto codigo de manera condicional  
    //con la dependencia  [] solo se dispara una unica vez.
    //se ejecuta el codigo cuando es renderizado cuando se carga la pagina  
    
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(imgs=> setImages(imgs))
    // },[category])  

    
   // getGifs()
    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

           {loading &&<p>Loading</p>}

             <div className="card-grid animate__animated animate__bounce">
            
                {
                    images.map(img=>(
                        <GifGridItem 
                        key={img.id}
                        {...img }
                        >
                        </GifGridItem>
                    ))
                }
        
            </div> 
        </>
        
    )
}
