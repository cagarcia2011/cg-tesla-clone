import { useEffect, useState } from "react"

export const useWindowDimensions = () => {
    const [width, setWidth] = useState<number>(() => window.innerWidth)
    const [height, setHeight] = useState<number>(() => window.innerHeight)

    useEffect(() => {
        const handleScreenResize = (e: Event) => {
            setWidth(() => window.innerWidth)
            setHeight(() => window.innerHeight)
        }

        window.addEventListener('resize', handleScreenResize)

        return () => {
            window.removeEventListener('resize', handleScreenResize)
        }
    }, [])

    return {
        width,
        height
    }
}