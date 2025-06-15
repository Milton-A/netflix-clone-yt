"use client";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Row from "@/components/Row";
import useAuth from "@/hooks/useAuth";
import { fetchMovies } from "@/services/movieService";
import { Movie } from "../../typing";
import { useEffect, useState } from "react";

interface MovieResults {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

function Home() {
  const { logout, loading } = useAuth()
  const [movies, setMovies] = useState<MovieResults | null>(null)

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies()
      setMovies(moviesData)
    }
    getMovies()
  }, [])

  if (loading) return null;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={movies?.netflixOriginals || null} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={movies?.trendingNow || null} />
          <Row title="Top Rated" movies={movies?.topRated || null} />
          <Row title="Action Movies" movies={movies?.actionMovies || null} />
          {/* My List */}
          <Row title="Comedy" movies={movies?.comedyMovies || null} />
          <Row title="Romance" movies={movies?.romanceMovies || null} />
          <Row title="Horror" movies={movies?.horrorMovies || null} />
          <Row title="Documentaries" movies={movies?.documentaries || null} />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}
export default Home;
