import { TaskCard } from './TaskCard'
import { TasksInfos } from './TasksInfos'

import styles from './Tasks.module.css'
import { Task } from '../App'
import { ClipboardText } from 'phosphor-react'

interface TasksProps {
  tasks: Task[]
  onCheckedChange: (id: string) => void
  onRemove: (id: string) => void
}

export function Tasks({ onCheckedChange, onRemove, tasks }: TasksProps) {
  const completedTasks = tasks.filter((task) => task.checked)
  const uncompletedTasks = tasks.filter((task) => !task.checked)

  return (
    <div className={styles.container}>
      <TasksInfos tasks={tasks} />
      <div className={styles.wrapper}>
        {tasks.length === 0 && (
          <div className={styles.empty}>
            <ClipboardText size={56} weight="thin" />
            <div>
              <b>Você ainda não tem tarefas cadastradas</b>
            </div>
            <div>Crie tarefas e organize seus itens a fazer</div>
          </div>
        )}
        {uncompletedTasks.map((task) => (
          <TaskCard
            key={task.id}
            checked={task.checked}
            id={task.id}
            onCheckedChange={onCheckedChange}
            onRemove={onRemove}
            title={task.title}
          />
        ))}

        {completedTasks.map((task) => (
          <TaskCard
            key={task.id}
            checked={task.checked}
            id={task.id}
            onCheckedChange={onCheckedChange}
            onRemove={onRemove}
            title={task.title}
          />
        ))}
      </div>
    </div>
  )
}
