import Image from "next/image"
import { Movie } from "@/types/typing";
import { baseUrlW500 } from "@/constants/movie"
import { useModalMovieStore } from "@/stores/useModalMovieStore";
import { DocumentData } from "firebase/firestore";

interface ThumbnailProps {
    movie: Movie | DocumentData
}
function Thumbnail({ movie }: ThumbnailProps) {
    const setShowModal = useModalMovieStore((state) => state.setShowModal)
    const setCurrentMovie = useModalMovieStore((state) => state.setMovie)
    return (
        <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            onClick={() => {
                setCurrentMovie(movie)
                setShowModal(true)
            }}
        >
            <Image src={`${baseUrlW500}${movie.backdrop_path || movie.poster_path}`} alt="" className="rounded-sm object-cover md:rounded" fill />
        </div>
    )
}

export default Thumbnail