import axios from 'axios'

import { useState } from 'react'
import { Card } from '../../components/Card'

import camada from '../../assets/Camada_1.png'
import ellipse1 from '../../assets/Ellipse 1.png'
import ellipse2 from '../../assets/Ellipse 2.png'
import searchImage from '../../assets/Frame 52.png'
import gitImage from '../../assets/image-github.png'

import styles from './Home.module.css'

export function Home(){

  const [user, setUser] = useState("")
  const [listUser, setListUser] = useState()
  const [error, setError] = useState("")

  const handleSearch= async () => {
    setError("")
    setListUser(null)

    await axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        console.log(response)
        setListUser(response.data)
        setUser("")
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError(error)
        } else {
          setError("Ocorreu um erro. Tente novamente.")
        }
        setUser("")        
      })
  }
  return(
    <div className={styles.container}>
      <img className={styles.camada} src={camada} alt="camada" />
      <img className={styles.ellipse1} src={ellipse1} alt="" />
      <img className={styles.ellipse2} src={ellipse2} alt="" />
      <div className={styles.box}>
        <div className={styles.title}>
          <img src={gitImage} alt="" />
          <h1>Perfil <span>GitHub</span></h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder='Digite um usuário do GitHub'
          value={user}
          onChange={(e) => setUser(e.target.value)}/>
          <button onClick={() => handleSearch()}>
            <img src={searchImage} alt="" />
          </button>
        </div>
        {error && <p className={styles.error}>Nenhum perfil foi encontrado com esse nome de usuário.<br></br> Tente novamente.</p>}
        <div>
          {listUser && (
            <Card 
              image={listUser.avatar_url} 
              username={listUser.login} 
              description={listUser.bio}
              route={`/profile/${listUser.login}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}