import Image from "next/image"
import { VscAccount } from "react-icons/vsc"

type ProfileImageProps = {
    src?: String | null
    className?: String
}

export function ProfileImage({ src, className = ""}: ProfileImageProps) {
    return (
        <div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}>
            {src != null 
                ? (
                    <Image src={src} alt="Profile Image" quality={100} fill />
                ) 
                : (
                    <VscAccount className="h-full w-full"/> 
                )
            }
        </div>
    )
}