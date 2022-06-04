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

        <Image src={'/logo.png'} width={300} height={300} className={styles.centerImage} />


      </div>

    </div>

    {/* Course Section */}

    <div className={styles.courseSection}>

    <h2>3 Months Trading Program</h2>
    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque nemo doloribus.</p>

{/* Month One  */}
    <div className={styles.month}>

      <div className={styles.monthImage}>
        <div className={styles.stickyContainer}>
        <div><h2>Month One</h2></div>
        </div>
      </div>

      <div className={styles.monthDetails}>

        <div >

          <h3>Get To Know About Share Market</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore optio exercitationem rerum voluptatibus quibusdam quos animi natus! Nesciunt suscipit ipsum, repudiandae consectetur dignissimos deleniti vitae!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis ab ipsum dicta, explicabo recusandae vitae dolores molestias itaque consequuntur fuga iste possimus nulla omnis suscipit! Autem cumque illo itaque?</p>
          
        </div>

        <div >
          <div className={styles.feedbackCard}>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus a aut soluta aliquam voluptate nam! Culpa sit reiciendis nisi itaque perferendis ducimus maiores delectus.</p>

          <h4>Student Name</h4>
          <p>Stockraja Student</p>
          </div>
        </div>

      </div>

    </div>




    </div>


  </>
  )
}
