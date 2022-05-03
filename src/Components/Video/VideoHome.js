import React, { useContext, useRef } from 'react'
import { VideoContext } from '../Context/VideoContext'
import styles from './VideoHome.module.css'

function VideoHome() {
    const vidRef = useRef()
    const { active } = useContext(VideoContext)
    return <>
        <video ref={vidRef} src={'vid/video1.mp4'} autoPlay muted loop playsInline
            className={active === 'video1'
                ? `${styles.vid} ${styles.active}`
                : `${styles.vid} ${styles.fadeOut}`
            }
        />
        <video src={'vid/video2.mp4'} autoPlay muted loop playsInline
            className={active === 'video2'
                ? `${styles.vid} ${styles.active}`
                : `${styles.vid} ${styles.fadeOut}`
            }
        />
    </>
}

export default VideoHome