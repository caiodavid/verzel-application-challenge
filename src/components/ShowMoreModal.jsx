import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/components/ShowMoreModal.module.css";
import { FiX } from "react-icons/fi";

import { selectActiveShowMoreModal } from "../store/ShowMoreModal/ShowMoreModal.selectors";
import { closeActiveShowMoreModal } from "../store/ShowMoreModal/ShowMoreModal.actions";

export function ShowMoreModal() {
  const dispach = useDispatch();

  const activeTask = useSelector(selectActiveShowMoreModal);

  if (activeTask.taskId) {
    return (
      <div className={styles.showMoreModalContainer}>
        <div className={styles.showMoreModalBox}>
          <FiX onClick={() => dispach(closeActiveShowMoreModal())} />
          <div className={styles.showMoreInfosBox}>
            <div className={styles.showMoreInfo}>
              <h1>Nome da task: </h1> <p>{activeTask.taskName}</p>
            </div>
            <div className={styles.showMoreInfo}>
              <h1>Data de Entrega: </h1> <p>{activeTask.deliveryDate}</p>
            </div>
            <div className={styles.showMoreInfo}>
              <h1>Data de conclusão: </h1>{" "}
              {activeTask.conclusionDate === "" ? (
                <p>não definida</p>
              ) : (
                <p>{activeTask.conclusionDate}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
