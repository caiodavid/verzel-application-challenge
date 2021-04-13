import { LoginModal } from "../components/LoginModal";
import { Navbar } from "../components/Navbar";

import "../global.css";
import styles from "../styles/pages/HomePage.module.css";


function HomePage() {
  return (
    <>
			<LoginModal />
      <nav>
				<Navbar />
			</nav>
			<section>
			</section>
    </>
  );
}

export default HomePage;
