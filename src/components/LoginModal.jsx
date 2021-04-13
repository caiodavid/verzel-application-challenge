import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import logo from "../assets/Logo_texto_branco.png";

import styles from "../styles/components/LoginModal.module.css";

import { toggleLoginModalVisibility } from "../store/LoginModal/LoginModal.actions";
import { selectLoginModalVisibility } from "../store/LoginModal/LoginModal.selectors";
import { toggleRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.actions";
import { selectRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.selectors";
import { userLogin } from "../store/Users/Users.actions";
import { selectUsers } from "../store/Users/Users.selectors";

export function LoginModal() {
  const dispach = useDispatch();
  const isLoginModalVisible = useSelector(selectLoginModalVisibility);
  const isRegisterModalVisible = useSelector(selectRegisterModalVisibility);
  const registeredUsers = useSelector(selectUsers);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
		

    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
    } else {
      const compatibleUser = registeredUsers.filter(
        (user) => user.email === email
      );

			console.log(compatibleUser)

      if (compatibleUser.length < 1) {
        alert("Usuário não encontrado!");
      } else if (password !== compatibleUser[0].password) {
        alert("Senha icorreta!");
      } else {
        dispach(userLogin(compatibleUser[0].id));
      }
    }
  };

  const toggleModals = (e) => {
    dispach(toggleLoginModalVisibility(isLoginModalVisible));
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
          <label htmlFor="user">Email:</label>
          <input
            type="text"
            id="user"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
