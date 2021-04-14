import { LeftMenu } from "../components/LeftMenu";
import { Navbar } from "../components/Navbar";
import { Tasks } from "../components/Tasks";

import "../global.css";
import styles from "../styles/pages/UserPage.module.css";

function UserPage() {
  return (
    <div className={styles.userPageContainer}>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.userPageSections}>

        <section>
          <LeftMenu />
        </section>
        <section>
          <Tasks />
        </section>
      </div>
    </div>
  );
}

export default UserPage;
