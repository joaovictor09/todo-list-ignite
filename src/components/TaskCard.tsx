import { Check, Trash } from 'phosphor-react'
import styles from './TaskCard.module.css'

interface TaskCardProps {
  checked: boolean
  id: string
  onCheckedChange: (id: string) => void
  onRemove: (id: string) => void
  title: string
}

export function TaskCard({
  checked,
  id,
  onCheckedChange,
  onRemove,
  title,
}: TaskCardProps) {
  return (
    <div className={`${styles.container} ${checked ? styles.checked : ''}`}>
      <button
        onClick={() => onCheckedChange(id)}
        className={`${styles.check} ${
          checked ? styles.checked : styles.unchecked
        }`}
      >
        {checked && <Check size={12} weight="bold" />}
      </button>

      <span className={`${checked && styles.checked}`}>{title}</span>

      <button onClick={() => onRemove(id)} className={styles.trash}>
        <Trash size={14} />
      </button>
    </div>
  )
}
