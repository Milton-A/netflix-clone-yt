import Image from "next/image"
import { Movie } from "../../typing"
import { baseUrlW500 } from "@/constants/movie"

interface ThumbnailProps {
    movie: Movie
}
function Thumbnail({ movie }: ThumbnailProps) {
    return (
        <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <Image src={`${baseUrlW500}${movie.backdrop_path || movie.poster_path}`} alt="" className="rounded-sm object-cover md:rounded" fill />
        </div>
    )
}

export default Thumbnail