import React, { useContext, useEffect, useRef, useState } from "react";
import { VideoContext } from "../Context/VideoContext";
import { IsNotMobile } from "../Responsive/Responsive";
import styles from "./Header.module.css";

function Header() {
  const vidContext = useContext(VideoContext);
  const [show, setShow] = useState(false);
  const listRef = useRef();
  const handleClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (listRef.current) {
      if (show) {
        listRef.current.style.display = "block";
        listRef.current.classList.add(styles.fadeIn);
      } else {
        listRef.current.classList.remove(styles.fadeIn);
        setTimeout(() => {
          listRef.current.style.display = "none";
        }, 500);
      }
    }
  }, [show]);
  return (
    <>
      <header className={styles.header}>
        {IsNotMobile() && (
          <a href="#home" className={styles.title}>
            <h1 className={styles}>Quoc Huy</h1>
          </a>
        )}
        <div className={styles.changeTheme}>
          <div className={styles.icon} onClick={handleClick}>
            <i className="fa-solid fa-palette"></i>
          </div>
          <ul className={styles.list} ref={listRef}>
            <li onClick={vidContext.handleVideo} className={styles.item}>
              <img
                src="img/bg-1.jpg"
                className={styles.video__item}
                data-vid="video1"
              ></img>
            </li>
            <li onClick={vidContext.handleVideo} className={styles.item}>
              <img
                src="img/bg-2.jpg"
                className={styles.video__item}
                data-vid="video2"
              ></img>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
