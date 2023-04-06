import { useWindowDimensions } from "../hooks"

interface FullScreenImageProps {
    src: string
}

export const FullScreenImage: React.FC<FullScreenImageProps> = ({ src }) => {
    const {width , height} = useWindowDimensions()

    return (
        <div className="absolute right-0 top-0 w-full h-[100svh] z-0">
            <img src={src} style={{width, height}} className="object-cover z-0 relative full-screen-image" />
        </div>
    )
}