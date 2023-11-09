import { Background } from './components/Background'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

import './globals.css'
import styles from './App.module.css'
import { useState } from 'react'

export interface Task {
  id: string
  title: string
  checked: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function onCheckedChange(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked,
        }
      }
      return task
    })

    setTasks(newTasks)
  }

  function onRemove(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  function onAdd(title: string) {
    const newTasks = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        checked: false,
      },
    ]

    setTasks(newTasks)
  }

  return (
    <div className={styles.container}>
      <Background />

      <NewTask onAdd={onAdd} />
      <Tasks
        onCheckedChange={onCheckedChange}
        onRemove={onRemove}
        tasks={tasks}
      />
    </div>
  )
}

export default App
