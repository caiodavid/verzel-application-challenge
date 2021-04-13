import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import logo from '../assets/Logo_texto_branco.png'

import styles from "../styles/components/LoginModal.module.css";

import { toggleLoginModalVisibility } from "../store/LoginModal/LoginModal.actions";
import { selectLoginModalVisibility } from "../store/LoginModal/LoginModal.selectors";

export function LoginModal() {
  const dispach = useDispatch();
  const isLoginModalVisible = useSelector(selectLoginModalVisibility);

	const handleLogin = (e) => {
		e.preventDefault()
		console.log('ola')
	}

  return (
    <div
      className={styles.loginModalContainer}
      style={{ display: isLoginModalVisible ? "flex" : "none" }}
    >
			<div className={styles.modalHead}>
				<img src={logo} alt=""/>
				<h1>Entre no To-Do List App</h1>
			</div>
			
      <div className={styles.loginModalBox}>
        <FiX onClick={() => dispach(toggleLoginModalVisibility(isLoginModalVisible))} />
        <form >
					<label htmlFor="user">Usuário ou email:</label>
          <input type="text" id="user" />
					<label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </form>
				<button onClick={handleLogin}>Entrar</button>
      </div>
			<div className={styles.loginModalBox}>
				<p>Novo no To-do List App? <a>Cadastrar-se</a></p>
			</div>
    </div>
  );
}
