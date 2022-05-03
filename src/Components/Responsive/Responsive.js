import { useMediaQuery } from "react-responsive";

export function IsNotMobile() {
    return useMediaQuery({query: '(min-width: 48em)'})
}

export function IsMobile() {
    return useMediaQuery({query: '(max-width: 47.9375em)'})
}