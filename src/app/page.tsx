import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Row from "@/components/Row";
import { fetchMovies } from "@/services/movieService";


async function Home() {
  const movies = await fetchMovies()
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-950/20 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={movies.netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={movies.trendingNow} />
          <Row title="Top Rated" movies={movies.topRated} />
          <Row title="Action Movies" movies={movies.actionMovies} />
          {/* My List */}
          <Row title="Comedy" movies={movies.comedyMovies} />
          <Row title="Romance" movies={movies.romanceMovies} />
          <Row title="Horror" movies={movies.horrorMovies} />
          <Row title="Documentaries" movies={movies.documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}
export default Home;
