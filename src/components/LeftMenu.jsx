import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "../assets/Logo_texto_branco.png";

import { selectCurrentUser } from "../store/Users/Users.selectors";
import { createTask } from "../store/Tasks/Tasks.actions";

import styles from "../styles/components/LeftMenu.module.css";

export function LeftMenu() {
  const dispach = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [taskName, setTaskName] = useState("");
  const [taskDeliveryDate, setTaskDeliveryDate] = useState("");
  const [taskConclusionDate, setTaskConclusionDate] = useState("");

  const handleCreateTask = (e) => {
    e.preventDefault();

    const taskData = {
      id: Math.random(),
      taskName: taskName,
      taskDeliveryDate: taskDeliveryDate,
      taskConclusionDate: taskConclusionDate,
      isFinished: false,
      fk_user_id: currentUser[0].id,
    };

    if (taskName === "" || taskDeliveryDate === "") {
      alert("Preencha todos os campos obrigatórios para criar a task!");
    } else {
      dispach(createTask(taskData));
      setTaskName("");
      setTaskDeliveryDate("");
      setTaskConclusionDate("");
    }
  };

  return (
    <div className={styles.leftMenuContainer}>
      <form action="submit" onSubmit={handleCreateTask}>
        <label htmlFor="taskName">*Nome da tarefa</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label htmlFor="taskName">*Data de entrega</label>
        <input
          type="date"
          onChange={(e) => setTaskDeliveryDate(e.target.value)}
          value={taskDeliveryDate}
        />

        <label htmlFor="taskName">Data de conclusão</label>
        <input
          type="date"
          onChange={(e) => setTaskConclusionDate(e.target.value)}
          value={taskConclusionDate}
        />

        <button type="submit">Adicionar task</button>
      </form>
      <img src={logo} alt="Verzel" />
    </div>
  );
}