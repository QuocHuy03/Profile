import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'
import styles from './Navbar.module.css'
import { IsMobile } from '../Responsive/Responsive'

function Navbar() {
    const [show, setShow] = useState(false)
    const navbarRef = useRef()
    const showBtnRef = useRef()
    const handleClick = () => {
        setShow(!show)
    }
    useEffect(() => {
        if (showBtnRef.current) {
            if (show) {
                navbarRef.current.classList.add(styles.slideIn)
                showBtnRef.current.classList.add(styles.slideOutBtn)
            } else {
                navbarRef.current.classList.remove(styles.slideIn)
                showBtnRef.current.classList.remove(styles.slideOutBtn)
            }
        }
    }, [show])
    return <>
        {
            IsMobile() && <div ref={showBtnRef} className={styles.showNav} onClick={handleClick}>
                <i className="fa-solid fa-chevron-left" />
            </div>
        }
        <ul ref={navbarRef} className={styles.nav__menu}>
            <NavItem
                onClick={handleClick}
                href="#home"
                children={<i className="fa-solid fa-house"></i>}
            />
            <NavItem
                onClick={handleClick}
                href="#about"
                children={<i className="fa-solid fa-user"></i>}
            />
            <NavItem
                onClick={handleClick}
                href="#skills"
                children={<i className="fa-solid fa-book"></i>}
            />
            <NavItem
                onClick={handleClick}
                href="#projects"
                children={<i className="fa-solid fa-file-code"></i>}
            />
            <NavItem
                onClick={handleClick}
                href="#contact"
                children={<i className="fa-solid fa-envelope"></i>}
            />
        </ul>
    </>
}

export default Navbar