import { createContext, useState } from "react";

export const VideoContext = createContext()

export function VideoProvider({ children }) {
    const [active, setActive] = useState('video1')
    const handleVideo = (e) => {
        setActive(e.target.dataset.vid ?? e.target.children[0].dataset.vid)
        console.log()
    }
    const value = {
        active,
        handleVideo
    }
    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}