import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiEdit, FiMaximize2, FiTrash } from "react-icons/fi";

import styles from "../styles/components/Tasks.module.css";
import { selectCurrentUser } from "../store/Users/Users.selectors";
import { selectAllTasks } from "../store/Tasks/Tasks.selectors";
import {
  completeTask,
  deleteTask,
  returnTask,
} from "../store/Tasks/Tasks.actions";

export function Tasks() {
  const dispach = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const allTasks = useSelector(selectAllTasks);

  const [showFinishedTasks, setShowFinishedTasks] = useState(false);

  const currentUserSelectedTasks =
    (allTasks.length >= 1) & !showFinishedTasks
      ? allTasks
          .filter((task) => task.fk_user_id === currentUser[0].id)
          .filter((task) => !task.isFinished)
      : (allTasks.length >= 1) & showFinishedTasks
      ? allTasks
          .filter((task) => task.fk_user_id === currentUser[0].id)
          .filter((task) => task.isFinished)
      : [];

  function handleDeleteTask(id) {
    if (window.confirm("Você realmente deseja deletar essa task?")) {
      dispach(deleteTask(id));
    }
  }

  function handleCompleteTask(id) {
    if (window.confirm("Você realmente deseja concluir essa task?")) {
      dispach(completeTask(id));
    }
  }

  function handleReturnTask(id) {
    if (
      window.confirm("Você realmente deseja retornar essa task para o To-Do?")
    ) {
      dispach(returnTask(id));
    }
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <a onClick={() => setShowFinishedTasks(false)}>To-Do</a>
        <p>|</p>
        <a onClick={() => setShowFinishedTasks(true)}>Done</a>
      </div>
      <div className={styles.tasksList}>
        {currentUserSelectedTasks.map((task) => (
          <div key={task.id} className={styles.taskBox}>
            <div className={styles.taskBoxContent}>
              <h1>{task.taskName}</h1>
              {!task.isFinished ? (
                <button onClick={() => handleCompleteTask(task.id)}>
                  Concluir
                </button>
              ) : (
                <button
                  style={{ background: "red" }}
                  onClick={() => handleReturnTask(task.id)}
                >
                  Ativar Novamente
                </button>
              )}
            </div>
            <div className={styles.taskBoxActions}>
              <FiMaximize2 />
              <FiEdit />
              <FiTrash onClick={() => handleDeleteTask(task.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}