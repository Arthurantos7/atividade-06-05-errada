import { useState } from 'react';
import './App.css';
import logo from './Esporte_Clube_Vitória_logo.png';

function App() {

  const {usuario, setUsuario} = useState('')
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'Jose']);

  const AdicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('usuário já existe na lista.');
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  }
  
  return (
  <div className='App'>
    <img src={logo} alt="Descrição da imagem" />

    <hr/>
    <h2>Adicionar usuário</h2>
    <input
      type='text'
      placeholder='Digite o nome do usuário'
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
    /> 
    <button onClick={AdicionarUsuario}>Adicionar</button>
    <hr/>
    <h2>Lista de usuários</h2>
    <ol>
      {usuarios.map((usuario, index) => (<li key={index}>{usuario}</li>))}
    </ol>
  </div>
  );   
}

export default App;

