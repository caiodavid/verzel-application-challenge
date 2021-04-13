import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import logo from '../assets/Logo_texto_branco.png'

import styles from "../styles/components/LoginModal.module.css";

import { toggleRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.actions";
import { selectRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.selectors";

export function RegisterModal() {
  const dispach = useDispatch();
  const isRegisterModalVisible = useSelector(selectRegisterModalVisibility);

	const handleLogin = (e) => {
		e.preventDefault()
		console.log('ola')
	}

  return (
    <div
      className={styles.loginModalContainer}
      style={{ display: isRegisterModalVisible ? "flex" : "none" }}
    >
			<div className={styles.modalHead}>
				<img src={logo} alt=""/>
				<h1>Registre-se no To-Do List App</h1>
			</div>
			
      <div className={styles.loginModalBox}>
        <FiX onClick={() => dispach(toggleRegisterModalVisibility(isRegisterModalVisible))} />
        <form >
					<label htmlFor="user">Usuário ou email:</label>
          <input type="text" id="user" />
					<label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </form>
				<button onClick={handleLogin}>Cadastrar</button>
      </div>
			<div className={styles.loginModalBox}>
				<p>Novo no To-do List App? <a>Cadastrar-se</a></p>
			</div>
    </div>
  );
}