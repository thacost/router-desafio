import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import developer from './images/developer.svg';

function Home() {
    return (
        <>
          <section className={styles.home}>
            <div className={styles.apresentacao}>
              <p>
                Olá, sou <br />
                <span>Thales Costa</span> <br />
                Futuro Dev Full Stack
              </p>
              <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                Saiba mais sobre mim
              </Link>
            </div>
            <figure>
              <img className={styles.img_home} src={developer} alt="Imagem de Home" />
            </figure>
          </section>
      </>
    );
}

export default Home;