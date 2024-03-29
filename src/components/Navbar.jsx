import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import {useAuthValue} from '../context/AuthContext';



const Navbar = () => {
    const {user} = useAuthValue();
    const { logout } = useAuth();



    return (
        <nav className={styles.navbar}>

            <NavLink to='/' className={styles.brand}>
                React<span>Blog</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        className={({isActive}) => (isActive
                        ? styles.active
                        : '')}
                        to='/'>Home</NavLink>
                </li>
                {!user && ( <> <li>
                    <NavLink
                        className={({isActive}) => (isActive
                        ? styles.active
                        : '')}
                        to='/login'>Entrar</NavLink>
                </li> < li > <NavLink
                    className={({isActive}) => (isActive
                    ? styles.active
                    : '')}
                    to='/register'>Cadastrar</NavLink> </li>
              </ >)}

                  {user && ( <> <li>
                      <NavLink
                          className={({isActive}) => (isActive
                          ? styles.active
                          : '')}
                          to='/posts/create'>Criar Post</NavLink>
                  </li> < li > <NavLink
                      className={({isActive}) => (isActive
                      ? styles.active
                      : '')}
                      to='/dashboard'>Dashboard</NavLink> </li>
                </ >)}

                <li>
                    <NavLink
                        className={({isActive}) => (isActive
                        ? styles.active
                        : '')}
                        to='/about'>Sobre</NavLink>
                </li>
                {user && (
                  <li>
                    <button onClick={logout}>Sair</button>
                  </li>
                )}
            </ul>

        </nav>
    )
}

export default Navbar