import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    } 
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto 