import { useState } from "react"

//Esto es un componente
//setCategories no se usa porque lo cambie
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange=({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<1){
            return;
        }

        // setCategories( categories => [inputValue, ...categories])
        onNewCategory( inputValue.trim() );
        setInputValue("");
    }

    //Esto es lo que se llama en la app
    return (
        // <input type="text" placeholder="Buscar Gifs" />

        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
        </form>
    )
}
