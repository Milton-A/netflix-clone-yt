"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Movie } from "@/types/typing";
import { baseUrl } from '@/constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/16/solid'
import { useModalMovieStore } from '@/stores/useModalMovieStore';


interface Props {
    netflixOriginals: Movie[] | null
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const setShowModal = useModalMovieStore((state) => state.setShowModal)
    const setCurrentMovie = useModalMovieStore((state) => state.setMovie)

    useEffect(() => {
        if (netflixOriginals) {
            setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
        }
    }, [netflixOriginals])

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                {movie?.backdrop_path || movie?.poster_path ? <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt={movie?.title || "undefined"} fill
                    style={{ objectFit: 'cover' }} /> : null}
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title || movie?.name || movie?.original_name}</h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
                </button>
                <button
                    className="bannerButton bg-[gray]/70"
                    onClick={() => {
                        setCurrentMovie(movie)
                        setShowModal(true)
                    }}
                >More Info <InformationCircleIcon className='h-5 w-5 md:w-8 md:h-8' />
                </button>
            </div>
        </div>
    )
}

export default Banner