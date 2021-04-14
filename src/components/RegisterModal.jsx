import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { FiX, FiCheckCircle } from "react-icons/fi";
import InputMask from "react-input-mask";

import axios from "axios";

import styles from "../styles/components/RegisterModal.module.css";

import { toggleRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.actions";
import { selectRegisterModalVisibility } from "../store/RegisterModal/RegisterModal.selectors";
import { createUser } from "../store/Users/Users.actions"

export function RegisterModal() {
  const dispach = useDispatch();
  const isRegisterModalVisible = useSelector(selectRegisterModalVisibility);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [addresNumber, setAddressNumber] = useState(0);

  const [isCepValid, setIsCepValid] = useState(Boolean);
  const [isCpfValid, setIsCpfValid] = useState(Boolean);

  function justNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, "");
    return parseInt(numsStr);
  }

  function ageCalculator(birthDate) {
    let separatedDate = birthDate.split("-");
    const birthYear = parseInt(separatedDate[0]);
    const birthMonth = parseInt(separatedDate[1]);
    const birthDay = parseInt(separatedDate[2]);

    let today = new Date();
    const year = parseInt(today.getFullYear());
    const month = parseInt(today.getMonth()) + 1;
    const day = parseInt(today.getDate());

    var age = year - birthYear;

    if (month < birthMonth || (month == birthMonth && day < birthDay)) {
      age = age - 1;
    }

    return age;
  }

  const CepValidateMessage = () => {
    if (isCepValid) {
      return <FiCheckCircle />;
    } else {
      return <p>CEP não encontrado!</p>;
    }
  };

  const CpfValidateMessage = () => {
    if (isCpfValid) {
      return <FiCheckCircle />;
    } else {
      return <p>CPF não encontrado!</p>;
    }
  };

  const cepValidate = async (e) => {
    var cepInCheck = justNumbers(e.target.value);

    try {
      if (cepInCheck.toString().length === 8) {
        await axios
          .get(`https://viacep.com.br/ws/${cepInCheck}/json/`)
          .then((response) => {
            if (response.data.erro) {
              setIsCepValid(false);
            } else {
              setAddress(response.data.logradouro);
              setIsCepValid(true);
              setCep(cepInCheck);
            }
          });
      } else {
        setIsCepValid(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cpfValidate = async (e) => {
    var cpfInCheck = justNumbers(e.target.value).toString();
    setCpf(e.target.value);

    var Soma;
    var Resto;
    Soma = 0;

    if (cpfInCheck.length !== 11) {
      setIsCpfValid(false);
    } else {
      if (
        [
          "00000000000",
          "11111111111",
          "22222222222",
          "33333333333",
          "44444444444",
          "55555555555",
          "66666666666",
          "77777777777",
          "88888888888",
          "99999999999",
        ].includes(cpfInCheck)
      ) {
        setIsCpfValid(false);
      } else {
        for (let i = 1; i <= 9; i++)
          Soma = Soma + parseInt(cpfInCheck.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if (Resto === 10 || Resto === 11) Resto = 0;
        if (Resto !== parseInt(cpfInCheck.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++)
          Soma = Soma + parseInt(cpfInCheck.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if (Resto === 10 || Resto === 11) Resto = 0;
        if (Resto !== parseInt(cpfInCheck.substring(10, 11))) {
          setIsCpfValid(false);
        } else {
          setIsCpfValid(true);
        }
      }
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
			id: Math.random(),
      name: name,
      email: email,
      password: password,
      birth: birth,
      cpf: isCpfValid ? cpf : '',
      cep: isCepValid ? cep : '',
      address: address,
      addresNumber: addresNumber,
      isLogged: false,
    };

    if (ageCalculator(birth) <= 12) {
      alert("Apenas usuários maiores de 12 anos podem se cadastrar");
    } else if (name === "" || email === "" || password === "" || birth === "") {
      alert(`Por favor, preencha todos os campos obrigatórios.`);
    } else {
			dispach(createUser(userData))
			dispach(toggleRegisterModalVisibility(isRegisterModalVisible))
    }
  };

  return (
    <div
      className={styles.registerModalContainer}
      style={{ display: isRegisterModalVisible ? "flex" : "none" }}
    >
      <div className={styles.modalHead}>
        <h1>Registre-se no To-Do List App</h1>
      </div>

      <div className={styles.registerModalBox}>
        <FiX
          onClick={() =>
            dispach(toggleRegisterModalVisibility(isRegisterModalVisible))
          }
        />
        <form>
          <label htmlFor="name">*Nome:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">*Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">*Senha:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.registerInputGroup}>
            <div className={styles.registerInputGroupItem}>
              <label htmlFor="birth">*Nascimento:</label>
              <input
                type="date"
                id="birth"
                onChange={(e) => setBirth(e.target.value)}
              />
            </div>

            <div className={styles.registerInputGroupItem}>
              <label htmlFor="cpf">CPF:</label>
              <InputMask
                mask="999.999.999-99"
                value={cpf}
                onChange={((e) => setCpf(e.target.value), cpfValidate)}
              />
              <CpfValidateMessage />
            </div>

            <div className={styles.registerInputGroupItem}>
              <label htmlFor="cep">CEP:</label>
              <DebounceInput
                minLength={8}
                type="text"
                id="cep"
                onChange={cepValidate}
              />
              <CepValidateMessage />
            </div>
          </div>

          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="phoneNumber">Número:</label>
          <input
            type="number"
            id="phoneNumber"
            onChange={(e) => setAddressNumber(e.target.value)}
          />
        </form>
        <button onClick={handleRegister}>Cadastrar</button>
      </div>
    </div>
  );
}
