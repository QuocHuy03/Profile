import React from "react";
import { IsNotMobile } from "../Responsive/Responsive";
import VideoHome from "../Video/VideoHome";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <VideoHome />
      <section className="section" id="home">
        <div className={styles.grid}>
          {IsNotMobile() && (
            <div className={styles.column3}>
              <a href="#" download className={styles.btn}>
                <span>
                  Download
                  <br />
                  CV
                </span>
              </a>
            </div>
          )}
          <div className={styles.column3}>
            <div className={styles.wrap}>
              {/* <p className={styles.greeting}>Hello, I'm</p> */}
              <h2 className={styles.name}>Quoc Huy</h2>
              <h4 className={styles.desc}>PHP Developer</h4>
            </div>
            <div className={styles.btn__wrap}>
              <a href="" className={styles}></a>
            </div>
            <div className={styles.img__wrap}>
              <img src="img/me.jpg" alt="Me.jpg" className={styles.img} />
            </div>
          </div>
          {IsNotMobile() && (
            <div className={styles.column3}>
              <a href="#about" className={styles.btn}>
                <span>
                  About <br />
                  Me <br />
                  <i className="fa-solid fa-sort-down"></i>
                </span>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
