import { useState } from "react"

export default function UserGreetings(){
    const [newText,setNewText]=useState(false);
    const changeHandler=()=>{
        setNewText(true);
    }
    return(
        <>
        <h3>Hello User</h3>
        {!newText && <p data-testid="reacttesting">React Testing Library</p>}
        {newText && <p>Text Changed</p>}
        <button onClick={()=>changeHandler()} data-testid="changeText">Change Text</button>
        <hr/>
        <input type="text" data-testid="input" defaultValue="10"/>
        </>
        
    )
}