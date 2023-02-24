import eng from "../ico/reino-unido.png"
import carga from "../ico/images.png"
import wait from "../ico/wait.png"
import clip from "../ico/clipBoard.png"
import Styles from "../styles/box.module.css"
import { useEffect, useState } from "react";

import axios from "axios"
import Spinner from "./loading";


function Box() {
   
    
    const [loading, setLoading] = useState(false)
    const [textArea, setTextArea] = useState("")
    const [response, setResponse] = useState("")
    
    

    async function handleSubmit(e){
        if(!textArea){
            setResponse("debes ingresar valores!")
        }else{
        setLoading(true)
        e.target.className = Styles.send
        const response = await axios.post("http://localhost:3001/", {input:textArea})
        setResponse(response.data)
        setLoading(false)
        e.target.className = Styles.sends
        }
    }
    function clipBoard(){
        navigator.clipboard.writeText(response)
    }
    

    return (
  
        <div className={Styles.box}>
            <div className={Styles.title}>
                <h1>Translate your text!</h1>
                <img width={50} height={50} src={eng} alt="imagen" />
            </div>
            <div className={Styles.textArea}>
                <textarea onChange={(e)=> setTextArea(e.target.value)} value={textArea} placeholder="write your text here!" name="text" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={Styles.button}>
                <button onClick={handleSubmit} type="button"><img width={15} src={!loading ? carga : wait} alt=""/>{!loading ? "Trans my Eng.": "Loading..."}</button>
            </div>
            <div className={Styles.textArea}>
                <button className={Styles.clipBoard} onClick={clipBoard}><img width={5} src={clip} alt="clip"/></button>
                <textarea value={response} name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    );
}

export default Box;