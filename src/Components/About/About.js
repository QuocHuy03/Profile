import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className="section" id="about">
      <header className="section__heading">
        <p className="section__desc">My info</p>
        <h2 className="section__title">About Me</h2>
      </header>
      <div className={styles.wrap}>
        <p className={styles.content}>
          Hi i'm Huy, a PHP Developer ( Fresher ) . I'm 18 year old and don't
          have much experience in the industry 🤔. I really want to get the
          attention from the recruiters so I can do my favorite job 😄. If
          you're interested in this website, contact me by click on the Contact
          button below. Thank you for reading 😚.
        </p>
        <a href="#contact" className={styles.btn__contact}>
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default About;
