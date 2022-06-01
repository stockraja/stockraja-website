import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {





  return (<>

    <div className={styles.topSection}>

      <h1>WELCOME TO <span className='highlight'> STOCKRAJA </span></h1>

      <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque nemo doloribus.</p>

      <button>Check Course</button>
      <br />

      <iframe src="https://www.youtube.com/embed/jVc8qVq0NR8?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    </div>

    <div className={styles.about}>

      <div className={styles.whoWeAre}>
        <h2>Who We Are?</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus dolor asperiores, tempore vel amet libero doloribus ea ex alias, necessitatibus totam perspiciatis cumque pariatur ad incidunt excepturi ipsum fugit dolores odit aspernatur quasi. Magnam autem ducimus accusamus, fugit assumenda aliquam consequatur maiores eveniet similique, iure temporibus ex officia? Exercitationem, ratione?</p>
      </div>

      <div className={styles.aboutImage}>



      </div>



    </div>


  </>
  )
}
