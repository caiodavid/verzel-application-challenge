import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import logo from "../assets/Logo_texto_branco.png";

import styles from "../styles/components/LoginModal.module.css";

import { toggleLoginModalVisibility } from "../store/LoginModal/LoginModal.actions";
import { selectLoginModalVisibility } from "../store/LoginModal/LoginModal.selectors";
import { toggleRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.actions";
import { selectRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.selectors";

export function LoginModal() {
  const dispach = useDispatch();
  const isLoginModalVisible = useSelector(selectLoginModalVisibility);
  const isRegisterModalVisible = useSelector(selectRegisterModalVisibility);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("ola");
  };

  const toggleModals = (e) => {
		console.log('hi')
    dispach(toggleLoginModalVisibility(isLoginModalVisible)) ;
    dispach(toggleRegisterModalVisibility(isRegisterModalVisible));
  };

  return (
    <div
      className={styles.loginModalContainer}
      style={{ display: isLoginModalVisible ? "flex" : "none" }}
    >
      <div className={styles.modalHead}>
        <img src={logo} alt="" />
        <h1>Entre no To-Do List App</h1>
      </div>

      <div className={styles.loginModalBox}>
        <FiX
          onClick={() =>
            dispach(toggleLoginModalVisibility(isLoginModalVisible))
          }
        />
        <form>
          <label htmlFor="user">Usuário ou email:</label>
          <input type="text" id="user" />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </form>
        <button onClick={handleLogin}>Entrar</button>
      </div>
      <div className={styles.loginModalBox}>
        <p>
          Novo no To-do List App?
          <a onClick={toggleModals}>Cadastrar-se</a>
        </p>
      </div>
    </div>
  );
}