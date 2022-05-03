import React, { useEffect, useRef, useState } from 'react'
import styles from './ButtonToTop.module.css'

function ButtonToTop() {
    const [show, setShow] = useState(false)
    const btnRef = useRef()
    useEffect(() => {
        if (show) {
            btnRef.current.classList.remove(styles.slideHidden)
        } else {
            btnRef.current.classList.add(styles.slideHidden)
        }
    }, [show])
    const handleScroll = () => {
        if (window.scrollY >= 300) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    return <>
        {
            <a ref={btnRef} href='#home' className={styles.btnToTop}>
                <i className="fa-solid fa-caret-up"></i>
            </a>
        }
    </>
}

export default ButtonToTop