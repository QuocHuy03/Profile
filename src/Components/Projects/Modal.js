import React, { useContext, useState } from 'react'
import { ModalContext } from './Projects'
import styles from './Projects.module.css'

function Modal({ links }) {
    const modalContext = useContext(ModalContext)
    return (
        <>
            {modalContext.modal &&
                <div className={styles.modal__wrap} onClick={modalContext.handleModal}>
                    <div className={styles.modal}>
                        <i className={"fa-solid fa-circle-xmark " + styles.modal__close} onClick={modalContext.handleModal} />
                        {
                            links.map(link =>
                                <div className={styles.link__wrap} key={link}>
                                    <i className={"fa-solid fa-check " + styles.mocal__icon}></i>
                                    <a
                                        href={link}
                                        className={styles.link}
                                    >
                                        <p>{link}</p>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Modal