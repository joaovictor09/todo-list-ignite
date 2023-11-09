import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { useState } from 'react'

interface NewTaskProps {
  onAdd: (title: string) => void
}

export function NewTask({ onAdd }: NewTaskProps) {
  const [title, setTitle] = useState('')

  function handleAddNewTask() {
    if (!title) return
    onAdd(title)
    setTitle('')
  }

  return (
    <div className={styles.container}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
      />

      <button onClick={handleAddNewTask} className={styles.button}>
        <PlusCircle size={20} />
        Criar
      </button>
    </div>
  )
}
