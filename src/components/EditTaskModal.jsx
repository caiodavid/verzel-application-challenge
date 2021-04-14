import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/components/EditTaskModal.module.css";
import { FiX } from "react-icons/fi";

import { useState } from "react";
import { selectActiveEditTaskModal } from "../store/EditTaskModal/EditTaskModal.selectors";
import { closeActiveEditModal } from "../store/EditTaskModal/EditTaskModal.actions";
import { editTask } from "../store/Tasks/Tasks.actions";
import { useEffect } from "react";

export function EditTaskModal() {
  const dispach = useDispatch();

  const activeTask = useSelector(selectActiveEditTaskModal);

  const [taskName, setTaskName] = useState("");
  const [taskDeliveryDate, setTaskDeliveryDate] = useState("");
  const [taskConclusionDate, setTaskConclusionDate] = useState("");

  useEffect(() => {
    function setStatesValues() {
      setTaskName(activeTask.taskName);
      setTaskDeliveryDate(activeTask.deliveryDate);
      setTaskConclusionDate(activeTask.conclusionDate);
    }
    setStatesValues();
  }, [activeTask]);

  const handleSaveEditTask = (e) => {
    e.preventDefault();
    dispach(
      editTask(
        activeTask.taskId,
        taskName,
        taskDeliveryDate,
        taskConclusionDate
      )
    );
    dispach(closeActiveEditModal());
  };

  if (activeTask.taskId) {
    return (
      <div className={styles.editModalContainer}>
        <div className={styles.editModalBox}>
          <FiX onClick={() => dispach(closeActiveEditModal())} />
          <form action="submit" onSubmit={handleSaveEditTask}>
            <label htmlFor="taskName">Nome da tarefa</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />

            <label htmlFor="taskName">Data de entrega</label>
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

            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
