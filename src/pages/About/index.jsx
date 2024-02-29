import styles from './About.module.css';

import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container">
     <div className={styles.about } >
     <h2>Sobre o React <span>Blog</span></h2>
      <p>Este projeto consistem eu um blog feito com React no front-end e Firebase no back-end.</p>
      <Link to="/posts/create" className="btn">Crie seu post!</Link>
     </div>
    </div>
  )
}

export default About