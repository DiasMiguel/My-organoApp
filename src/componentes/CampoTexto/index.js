//Style Code, é o mesmo que criar uma function
import './CampoTexto.css'
const CampoTexto = (props) => {
// propos vem de propriedade

    const placeholderModificada = `${props.placeholder}..`


    const aoDigitado = (evento) => { 
        props.aoAlterado(evento.target.value)
    } 
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto