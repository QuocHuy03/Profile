import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

function SkillItem({ title, icon, point }) {
  const [checkScroll, setCheckScroll] = useState(false);
  const rangeRef = useRef();
  const descRef = useRef();
  useEffect(() => {
    const desc = descRef.current;
    const range = rangeRef.current;
    const point = +desc.dataset.point;
    const increment = point / 20;
    desc.innerText = 0;
    const counterUp = () => {
      const c = desc.innerText;
      if (+c < point) {
        setTimeout(() => {
          const newInner = +c + increment;
          desc.innerText = newInner.toFixed(0);
          range.style.width = newInner.toFixed(0) + "%";
          return counterUp();
        }, 18);
      }
    };
    const handleScroll = () => {
      if (window.scrollY > 955) {
        counterUp();
        setCheckScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      once: checkScroll,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checkScroll]);
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.icon}>{icon}</p>
      <p ref={descRef} className={styles.desc} data-point={point}></p>
      <div className={styles.range__wrap}>
        <div ref={rangeRef} className={styles.range} />
      </div>
    </li>
  );
}

export default SkillItem;
