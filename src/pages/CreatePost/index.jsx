import style from './CreatePost.module.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthValue} from '../../context/AuthContext';

const CreatePost = () => {

    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags,setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    };

  return (
    <div className={style.create_post}>
        <h2>Criar Post</h2>
        <p>Compartilhe suas ideais com o mundo.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input type='text' 
            name='title' required 
            placeholder='Pense num bom título...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}/>
          </label>

          <label>
            <span>URL da imagem:</span>
            <input type='text' 
            name='image'  
            placeholder='Insira a url de uma imagem'
            onChange={(e) => setImage(e.target.value)}
            value={image}/>
          </label>

          <label>
            <span>Conteúdo</span>
            <textarea type='text' 
            name='body'  required
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}/>
          </label>

          <label>
            <span>Insira as tags separadas por vírgula</span>
            <input type='text' 
            name='tags'  
            placeholder='Insira suas tags'
            onChange={(e) => setTags(e.target.value)}
            value={tags}/>
          </label>
          <button className='btn'>Publicar</button>
          {/* {!loading &&  <button className='btn'>Publicar</button>}
          {loading &&  <button disabled className='btn'>Aguarde...</button>}
          {error && <p className='error'>{error}</p>} */}


        </form>
    </div>
  )
}

export default CreatePost