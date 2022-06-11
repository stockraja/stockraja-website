import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.topSection}>
        <h1>
          WELCOME TO <span className="highlight"> STOCKRAJA </span>
        </h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque
          nemo doloribus.
        </p>

        <button>Check Course</button>
        <br />

        <iframe
          src="https://www.youtube.com/embed/HEIKG9TfolA?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.about}>
        <div className={styles.whoWeAre}>
          <h2 className="highlight">Who We Are?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            dolor asperiores, tempore vel amet libero doloribus ea ex alias,
            necessitatibus totam perspiciatis cumque pariatur ad incidunt
            excepturi ipsum fugit dolores odit aspernatur quasi. Magnam autem
            ducimus accusamus, fugit assumenda aliquam consequatur maiores
            eveniet similique, iure temporibus ex officia? Exercitationem,
            ratione?
          </p>
        </div>

        <div className={styles.aboutImage}>
          <Image
            src="/logo.png"
            alt="Stockraja Logo"
            width={300}
            height={300}
            className={styles.centerImage}
          />
        </div>
      </div>

      {/* Course Section */}

      <div className={styles.courseSection}>
        <h2>3 Months Trading Program</h2>
        <p className="subtitle" id="courseSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque
          nemo doloribus.
        </p>

        {/* Month One  */}
        <div className={styles.month}>
          <div className={styles.monthDetails}>
            <div>
              <h3 className="highlight">Month 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                optio exercitationem rerum voluptatibus quibusdam quos animi
                natus! Nesciunt suscipit ipsum, repudiandae consectetur
                dignissimos deleniti vitae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nobis ab ipsum dicta, explicabo recusandae vitae
                dolores molestias itaque consequuntur fuga iste possimus nulla
                omnis suscipit! Autem cumque illo itaque?
              </p>
            </div>

            <div>
              <div className={styles.feedbackCard}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  possimus a aut soluta aliquam voluptate nam! Culpa sit
                  reiciendis nisi itaque perferendis ducimus maiores delectus.
                </p>

                <h4>Student Name</h4>
                <p>Stockraja Student</p>
              </div>
            </div>
          </div>

          <div className={styles.monthImage}>
            <div className={styles.stickyContainer}>
              <div>
                <Image
                  src="/month1.png"
                  alt="Stockraja Logo"
                  width={500}
                  height={500}
                  className={styles.centerImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Month Two */}
        <div className={styles.month}>
          <div className={styles.monthDetails}>
            <div>
              <h3 className="highlight">Month 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                optio exercitationem rerum voluptatibus quibusdam quos animi
                natus! Nesciunt suscipit ipsum, repudiandae consectetur
                dignissimos deleniti vitae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nobis ab ipsum dicta, explicabo recusandae vitae
                dolores molestias itaque consequuntur fuga iste possimus nulla
                omnis suscipit! Autem cumque illo itaque?
              </p>
            </div>

            <div>
              <div className={styles.feedbackCard}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  possimus a aut soluta aliquam voluptate nam! Culpa sit
                  reiciendis nisi itaque perferendis ducimus maiores delectus.
                </p>

                <h4>Student Name</h4>
                <p>Stockraja Student</p>
              </div>
            </div>
          </div>

          <div className={styles.monthImage}>
            <div className={styles.stickyContainer}>
              <div>
                <Image
                  src="/month2.png"
                  alt="Stockraja Logo"
                  width={500}
                  height={500}
                  className={styles.centerImage}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Month Three */}
        <div className={styles.month}>
          <div className={styles.monthDetails}>
            <div>
              <h3 className="highlight">Month 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                optio exercitationem rerum voluptatibus quibusdam quos animi
                natus! Nesciunt suscipit ipsum, repudiandae consectetur
                dignissimos deleniti vitae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nobis ab ipsum dicta, explicabo recusandae vitae
                dolores molestias itaque consequuntur fuga iste possimus nulla
                omnis suscipit! Autem cumque illo itaque?
              </p>
            </div>

            <div>
              <div className={styles.feedbackCard}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  possimus a aut soluta aliquam voluptate nam! Culpa sit
                  reiciendis nisi itaque perferendis ducimus maiores delectus.
                </p>

                <h4>Student Name</h4>
                <p>Stockraja Student</p>
              </div>
            </div>
          </div>

          <div className={styles.monthImage}>
            <div className={styles.stickyContainer}>
              <div>
                <Image
                  src="/month3.png"
                  alt="Stockraja Logo"
                  width={500}
                  height={500}
                  className={styles.centerImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      {/* Tools  */}

      {/* End Note  */}
      <div className={styles.endNote}>
        <h2>
          <span className="highlight">Start Your Trading Carrer With Us.</span>
        </h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque
          nemo doloribus.
        </p>

        <button>Contact US</button>
      </div>
    </>
  );
}
