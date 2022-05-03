import React from 'react'
import styles from './Mobile.module.css'

function Buttons() {
    return (
        <div className={styles.btn__section}>
            <div className={styles.btn__wrap}>
                <a href="download/nguyenhai_cv.pdf" download className={styles.btn__download}>
                    DOWNLOAD CV
                </a>
            </div>
            <div className={styles.btn__wrap}>
                <a href="#about" className={styles.btn__about}>
                    ABOUT
                </a>
            </div>
        </div>
    )
}

export default Buttons