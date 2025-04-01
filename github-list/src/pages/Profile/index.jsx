import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../components/Card'
import styles from './Profile.module.css'

export function Profile(){
  const { user } = useParams()
  const [listUser, setListUser] = useState('')
  
  useEffect(()=> {
    const data = async () => {
      await axios
        .get(`https://api.github.com/users/${user}`)
        .then((response) => {
          console.log(response)
          setListUser(response.data)
        })
        .catch((e) => console.log(e))
    }
    data()
  },[])
  return(
    <>
      <div className={styles.details}>
        <img src={''} alt="" />
        <div className={styles.user}>
          <div className={styles.details_user}>
            <div className={styles.followers_details}>
              <p>{listUser.followers}</p>
              <p>Seguidores</p>
            </div>
            <div className={styles.followers_details}>
              <p>{listUser.following}</p>
              <p>Seguindo</p>
            </div>
            <div className={styles.followers_details}>
              <p>{listUser.public_repos}</p>
              <p>Repositórios</p>
            </div>
          </div>
          <div className={styles.username_details}>
            <h3>username</h3>
            <p>description</p>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </>
  )

}