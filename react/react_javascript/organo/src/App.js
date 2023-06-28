import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  } 

  function deletarColaborador() {
    console.log('Olá!')
  }

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.corSecundaria = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
        <Time mudarCor={mudarCorDoTime}
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
