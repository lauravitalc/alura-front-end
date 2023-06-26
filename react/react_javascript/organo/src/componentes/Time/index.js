import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props, aoDeletar) => {
    return (
        (props.colaboradores.length > 0) && <section className="time" style={{ backgroundColor: props.corPrimaria }}>
            <h3 style={{borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {
                    return <Colaborador key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corDeFundo={props.corSecundaria} aoDeletar={aoDeletar}/>
                }
                )}
            </div>
        </section>
    )
}

export default Time