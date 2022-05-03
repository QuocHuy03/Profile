import React from 'react'
import styles from './Navbar.module.css'
function NavItem({ href, children, onClick }) {
    return (
        <li className={styles.nav__item}>
            <a href={href} className={styles.nav__link} onClick={onClick}>
                {children}
            </a>
        </li>
    )
}

export default NavItem