import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/components/Navbar.module.css";
import { FiLogIn, FiUser, FiLogOut } from "react-icons/fi";
import logo from "../assets/logo_branco.png";

import { selectLoginModalVisibility } from "../store/LoginModal/LoginModal.selectors";
import { toggleLoginModalVisibility} from "../store/LoginModal/LoginModal.actions";
import { selectRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.selectors";
import { toggleRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.actions";

export function Navbar() {
  const dispach = useDispatch();
  const isLogged = false;
  const isLoginModalVisible = useSelector(selectLoginModalVisibility);
	const isRegisterModalVisible = useSelector(selectRegisterModalVisibility)

  if (isLogged) {
    return (
      <div className={styles.navbarContainer}>
        <img src={logo} alt="Verzel" />
        <div className={styles.navbarUserContainer}>
          <p>
            <FiUser /> Caio
          </p>
          <p>|</p>
          <button>
            Sair <FiLogOut />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.navbarContainer}>
        <img src={logo} alt="Verzel" />
        <div className={styles.navbarButtonGroup}>
          <a onClick={() => dispach(toggleLoginModalVisibility(isLoginModalVisible))}>
            Sign in
          </a>
          <button
            onClick={() => dispach(toggleRegisterModalVisibility(isRegisterModalVisible))}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }
}
