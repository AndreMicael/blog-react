import { useAuth } from '../../hooks/useAuth';
import styles from './Register.module.css';
import { useState,useEffect } from 'react';

const Register = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,setError] = useState('');

  const { createUser, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais")
      return
    }

    const res = await createUser(user);

    console.log(res);
 
  }

  useEffect(()=> {
    if(authError){
      setError(authError)
    }
  },[authError])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas ideias.</p>
      <form className='container' onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type="text"
          name='displayName'
          required
          placeholder='Nome do Usuário'
          value={displayName}
          onChange={(e)=> setDisplayName(e.target.value)}/>
        </label>

        <label>
          <span>Email:</span>
          <input 
          type="email"
          name='email'
          required
          placeholder='E-mail do Usuário'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha:</span>
          <input 
          type="password"
          name='password'
          required
          placeholder='Insira sua senha'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input 
          type="password"
          name='repeatPassword'
          required
          placeholder='Confirme a sua senha '
          value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}/>
        </label>
       {!loading &&  <button className='btn'>Cadastrar</button>}
       {loading &&  <button disabled className='btn'>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>

    </div>
  )
}

export default Register
