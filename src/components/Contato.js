import styles from "./Contato.module.css";
import { GoMail } from 'react-icons/go';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

function Contato() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatoo</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>
                <div className={styles.icones}>

                    <a href='mailto:ttcosta03@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone}/>
                    </a>
                    
                    <a href='https://www.instagram.com/thales.costa03' target='_blank' rel='noopener noreferrer'>
                        <BsInstagram className={styles.icone}/>
                    </a>
                
                    
                    <a href='https://www.github.com/thacost' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone}/>
                    </a>
                    
                    <a href='https://www.linkedin.com/in/thalesvcosta' target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone}/>
                    </a>
                    
                </div>
            </section>
        </>
    );
}

export default Contato;