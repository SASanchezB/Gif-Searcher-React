import { useEffect, useState } from "react"
// import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    //ESTO SE PUEDE RESUMIR TODO EN UN CUSTOM HOOK
    // const [images, setImages] = useState([]);

    // const getImages = async()=>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(()=>{
    //     getImages();
    // }, [])

    const {images, isLoading} = useFetchGifs (category);

    return (
        <>
            <h3>{category}</h3>
            {/* Una forma de hacerlo
            {
                isLoading ? (<h2>Cargando...</h2>) : null
            } */}

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            {/* La palabra class en javaScript es reservada, se usa className */}
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
