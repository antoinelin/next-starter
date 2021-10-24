import Icon from '@components/Icon/Icon.component'
import styles from './Card.module.css'

interface Props {
  title: string
  description: string
  link: string
}

export default function Card({ title, description, link }: Props) {
  return (
    <a href={link} className={styles.card}>
      <h2>{title}&nbsp;&rarr;</h2>
      <p>{description}</p>
      <Icon name="vercel" className={styles.logo} />
    </a>
  )
}

Card.displayName = 'Card'
