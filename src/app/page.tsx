// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { fetchMovies } from "@/services/movieService";
import { Movie } from "@/types/typing";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Row from "@/components/Row";
import Modal from "@/components/Modal";
import { useModalMovieStore } from "@/stores/useModalMovieStore";

interface MovieResults {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

export default function Home() {
  const { loading } = useAuth();
  const showModal = useModalMovieStore((state) => state.showModal)

  const [movies, setMovies] = useState<MovieResults | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    getMovies();
  }, []);

  if (loading) return null;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={movies?.netflixOriginals || []} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={movies?.trendingNow || []} />
          <Row title="Top Rated" movies={movies?.topRated || []} />
          <Row title="Action Movies" movies={movies?.actionMovies || []} />
          <Row title="Comedy" movies={movies?.comedyMovies || []} />
          <Row title="Romance" movies={movies?.romanceMovies || []} />
          <Row title="Horror" movies={movies?.horrorMovies || []} />
          <Row title="Documentaries" movies={movies?.documentaries || []} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
}
