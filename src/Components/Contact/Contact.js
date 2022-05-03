import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className="section" id="contact">
      <header className="section__heading">
        <p className="section__desc">Connect information</p>
        <h2 className="section__title">Contact Me</h2>
      </header>
      <div className={styles.content}>
        <div className={styles.link__wrap}>
          <a
            href="https://www.messenger.com/t/lqh.coder"
            className={styles.link__item}
          >
            <img
              src="img/messenger.png"
              alt="Messenger"
              className={styles.link__img}
            />
          </a>
          <a href="tel:+84775502724" className={styles.link__item}>
            <img
              src="img/call.png"
              alt="Messenger"
              className={styles.link__img}
            />
          </a>
        </div>
        <form
          action="https://formsubmit.co/el/suvoxo"
          method="POST"
          className={styles.form}
        >
          <div className={styles.input__wrap}>
            <input
              id="email"
              className={styles.input}
              placeholder="Enter your email..."
              type="email"
              name="email"
              required
            />
          </div>
          <div className={styles.input__wrap}>
            <textarea
              id="message"
              className={styles.input + " " + styles.txtarea}
              placeholder="Message..."
              name="massage"
              required
            />
          </div>
          <input
            type="hidden"
            name="_next"
            value={window.location.href + "thanks.html"}
          ></input>
          <button type="submit" className={styles.submit}>
            Send Mail
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
