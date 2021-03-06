import React, {useState} from 'react';
import api from '../../../services/api';
import { Link } from "react-router-dom";

import {Form} from '../../../styles/formStyle';

const Funcionario = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
   async function handleAddFuncionario(e){
       e.preventDefault();
       
       if(nome === '' || cpf === '') {
           setErrorMessage ('Preencha todos os campos solicitados');
           return;
       };

       const params = {
        nome: nome,
        cpf: cpf
       }

       try {
           await api.put(`funcionario/${Funcionario.id}`, params);
           setNome('');
           setCpf('');
           
           
       } catch (error) {
           console.log ('handleAddFuncionario error', error);
       }
       console.log('form submitted');
    }

    return (
        <>
            <h1>Funcionario</h1>
            <Form onSubmit={handleAddFuncionario}>
                <input value={nome} 
                onChange={e => setNome(e.target.value)} 
                type='text' 
                placeholder='Digite seu nome'></input>
                
                <input value={cpf} 
                onChange={e => setCpf(e.target.value)} 
                type='text' 
                placeholder='Digite seu cpf'></input>                             
                
                <Link to='/funcionario'><button type='submit'>Enviar</button></Link>
            </Form>
            <p>{errorMessage}</p>
        </>
        //74424131025
        //57753425005
        //62730162089
    )
}
export default Funcionario;