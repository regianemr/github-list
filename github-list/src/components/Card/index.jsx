import { Link } from 'react-router-dom'
import styles from './Card.module.css'
export function Card({ username, description, image }) {
  return (
    <Link to={`/profile/${username}`}>
      <div className={styles.card}>
        <div className={styles.details}>
          <img src={image} alt="" />
          <div>
            <p>{username}</p>
            <p>{description}</p>
          </div>
        </div>
        <span class="material-symbols-outlined">
          arrow_right
        </span>
      </div>
    </Link>
  )
}