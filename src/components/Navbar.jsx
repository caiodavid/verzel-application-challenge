import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/components/Navbar.module.css";
import { FiLogIn, FiUser, FiLogOut } from "react-icons/fi";
import logo from "../assets/logo_branco.png";

import { selectLoginModalVisibility } from "../store/LoginModal/LoginModal.selectors";
import { toggleLoginModalVisibility} from "../store/LoginModal/LoginModal.actions";
import { selectRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.selectors";
import { toggleRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.actions";
import { selectCurrentUser } from "../store/Users/Users.selectors";
import { userLogout } from "../store/Users/Users.actions";

export function Navbar() {
  const dispach = useDispatch();
  const isLoginModalVisible = useSelector(selectLoginModalVisibility);
	const isRegisterModalVisible = useSelector(selectRegisterModalVisibility)
	const loggedUser = useSelector(selectCurrentUser)

	let hasLoggedUser = loggedUser.length < 1 ? false : true

  if (hasLoggedUser) {
    return (
      <div className={styles.navbarContainer}>
        <img src={logo} alt="Verzel" />
        <div className={styles.navbarUserContainer}>
          <p>
            <FiUser /> {loggedUser[0].name}
          </p>
          <p>|</p>
          <button onClick={() => dispach(userLogout(loggedUser[0].id))}>
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
