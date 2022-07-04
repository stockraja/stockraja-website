import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.topSection}>
        <h1>
          <strong> WELCOME TO <span className="highlight"> STOCKRAJA </span></strong>
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
            We are a young team of fulltime Stockmarket Trader and Investor. Our mission is to spread awareness about stock market as well as other financial market. To go to roots of basics and take our students to a stage of professionalism. 
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
            <div className={styles.hfull}>
              <h3 className="highlight">Month 1</h3>

              <p className="bold">Live online sessions from beginner to advance</p>

              {/* <p>
                In this month we are conducting live session on basic to advenced share market. In this we are covering basics of Stock market, Fundamental analysis, Technical analysis, Advanced technical analysis, Equity, Futures, Commodities, Options, etc.
              </p>
              <p>
                During this course our focus will be on making you a good trader. So we also have sessions on Trading Strategies , Trading Psychology and Money Management.
              </p> */}
              {/* 20 words */}
              <p> In this we are covering basics of Stock market, Fundamental analysis, Technical analysis, Advanced technical analysis, Equity, Futures, Commodities, Options, etc.</p>


              
            </div>

            <div className={styles.hfull}>
            <div className={styles.feedbackCard}>
                <p>
                “FigJam adds a whole new level of end-to-end collaboration—from brainstorming, research workshops, to design jams.”
                </p>

                <span className={styles.card_profile}>
                  <Image src='/logo.png' width={50} height={50} alt="feedback by"/>
                  <div className={styles.feedback_by}>
                    <p className="bolder">Pranit Patil</p>
                    <p className="bold">Student at Stockraja</p>
                  </div>
                </span>
                
              </div>
            </div>
          </div>

          <div className={styles.monthImage}>
            <div className={styles.stickyContainer}>
                <Image
                  src="/month1.png"
                  alt="Stockraja Logo"
                  width={700}
                  height={700}
                  // layout="fill"
                  className={styles.centerImage}
                />
            </div>
          </div>
        </div>

        {/* Month Two */}
        <div className={styles.month}>
          <div className={styles.monthDetails}>
            <div className={styles.hfull}>
              <h3 className="highlight">Month 2</h3>
              <p className="bold">Dummy Money Trading / Paper Trading</p>
              <p>
                Practice our trading Strategies and implement with dummy money until you get confidence for the live market. Also you will get traders advice on each trade you make.
                
              </p>
            </div>

              <div className={styles.hfull}>
              <div className={styles.feedbackCard}>
                <p>
                “FigJam adds a whole new level of end-to-end collaboration—from brainstorming, research workshops, to design jams.”
                </p>

                <span className={styles.card_profile}>
                  <Image src='/logo.png' width={50} height={50} alt="feedback by"/>
                  <div className={styles.feedback_by}>
                    <p className="bolder">Pranit Patil</p>
                    <p className="bold">Student at Stockraja</p>
                  </div>
                </span>
                
              </div>
            </div>
          </div>

          <div className={styles.monthImage}>
            <div className={styles.stickyContainer}>
            <Image
                  src="/month2.png"
                  alt="Stockraja Logo"
                  width={700}
                  height={700}
                  // layout="fill"
                  className={styles.centerImage}
                />
            </div>
          </div>
        </div>
        {/* Month Three */}
        <div className={styles.month}>
          <div className={styles.monthDetails}>
            <div className={styles.hfull}>
              <h3 className="highlight">Month 3</h3>
              <p className="bold">Trading with real money under our guidence</p>
              <p>
                Its Time to play in live market. Trade in live market under guidence of our traders. Learn how to maintain trading journal.
              </p>
            </div>

            <div className={styles.hfull}>
            <div className={styles.feedbackCard}>
                <p>
                “FigJam adds a whole new level of end-to-end collaboration—from brainstorming, research workshops, to design jams.”
                </p>

                <span className={styles.card_profile}>
                  <Image src='/logo.png' width={50} height={50} alt="feedback by"/>
                  <div className={styles.feedback_by}>
                    <p className="bolder">Pranit Patil</p>
                    <p className="bold">Student at Stockraja</p>
                  </div>
                </span>
                
              </div>
            </div>
          </div>

          <div className={styles.monthImage}>
            <div className={styles.stickyContainer}>
            <Image
                  src="/month3.png"
                  alt="Stockraja Logo"
                  width={700}
                  height={700}
                  // layout="fill"
                  className={styles.centerImage}
                />
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      {/* Tools  */}

      {/* End Note  */}
      <div className={styles.endNote}>
        <h2>
          Don&apos;t Miss This <span className="highlight">Golden</span> Opportuinity.
        </h2>

        <p className="subtitle">
          If you not understand anything from our course you will get 100% moneyback.
        </p>

        <button>Contact US</button>
      </div>
    </>
  );
}
