import "../global.css";
import styles from "../styles/pages/Home.module.css";
import globe from "../assets/globe.mp4";
import astro from "../assets/astro.svg";

import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { Navbar } from "../components/Navbar";

function Home() {
  return (
    <div className={styles.homePageBody}>
      <div className={styles.imgFilter} />
      <LoginModal />
      <RegisterModal />

      <nav>
        <Navbar />
      </nav>
      <div className={styles.homeContainer}>
        <div className={styles.homeContentBox}>
          <section className={styles.homeTextContainer}>
            <h1>Onde o mundo organiza as tarefas</h1>
            <p>
              Milhões de pessoas utlizam o To-Do App da Verzel no seu dia a dia
              para organizar suas tarefas e metas cotidianas, se tornando muito
              mais produtivas!
            </p>
          </section>
          <section className={styles.homeGlobeContainer}>
            {
              <video autoPlay loop muted id="video">
                <source src={globe} type="video/mp4" />
              </video>
            }
          </section>
        </div>
      </div>
      <section className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <img src={astro} alt="" />
      </section>
    </div>
  );
}

export default Home;
