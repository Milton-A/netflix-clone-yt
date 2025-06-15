import { create } from 'zustand'
import { Movie } from '@/types/typing'
import { DocumentData } from 'firebase/firestore'

interface ModalMovieStore {
    showModal: boolean
    setShowModal: (value: boolean) => void
    movie: Movie | DocumentData | null
    setMovie: (movie: Movie | DocumentData | null) => void
}

export const useModalMovieStore = create<ModalMovieStore>((set) => ({
    showModal: false,
    setShowModal: (value) => set({ showModal: value }),
    movie: null,
    setMovie: (movie) => set({ movie }),
}))