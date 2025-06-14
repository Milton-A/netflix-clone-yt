import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { fetchMovies } from "@/services/movieService";


async function Home() {
  const movies = await fetchMovies()
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main>
        <Banner netflixOriginals={movies.netflixOriginals} />
        <section>
          {/* Row */}

        </section>
      </main>
      {/* Modal */}
    </div>
  );
}
export default Home;
