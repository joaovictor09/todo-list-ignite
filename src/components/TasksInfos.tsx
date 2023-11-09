import { Task } from '../App'
import styles from './TasksInfos.module.css'

interface TasksInfosProps {
  tasks: Task[]
}

export function TasksInfos({ tasks }: TasksInfosProps) {
  const completedTasks = tasks.filter((task) => task.checked).length
  const totalTasks = tasks.length

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.text}>Tarefas criadas</span>
        <span className={styles.counter}>{totalTasks}</span>
      </div>

      <div className={styles.info}>
        <span className={styles.text}>Concluídas</span>
        <span className={styles.counter}>{completedTasks}</span>
      </div>
    </div>
  )
}
