import {useState} from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () =>{

    // const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (newCategory) =>{

        //Esto no identifica entre minusculas y mayusculas
        if(categories.includes(newCategory)){
            return;
        }

        //... es un operador, en este caso como que mantiene la lista
        //  El orden solo cambia si va antes o despues
        //setCategories([...categories, "Valorant"])
        //setCategories(["Valorant", ...categories])

        setCategories([newCategory, ...categories])
    }

    return(
        <>
            {/* titulo */}
            <h1>
                Gif Searcher
            </h1>

            {/* Input */}
            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>

            {/* Listado de gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/* al usar GifGrid no se necesita el ol */}
            {/* <ol>
                {
                    categories.map(category=>{
                        return (
                            // <div key={category}>
                            //     <h3>{category}</h3>
                            //     <li>{category}</li>
                            // </div>
                            <GifGrid key={category} category={category}/>
                        )
                    })
                }
            </ol> */}

            {
                categories.map(category=>{
                    return (
                        <GifGrid key={category} category={category}/>
                    )
                })
            }
            
            <footer> Santiago Sanchez / 2025 </footer>

        </>
    )
}

//v3dxpIFWePbG0362BfZdvLMfKzbn93TG // -> gif api key