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
import Plans from "@/components/Plans";
import { getProducts, Product } from "@invertase/firestore-stripe-payments";
import payments from "@/lib/stripe";
import useSubscription from "@/hooks/useSubscription";

interface MovieResults {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  products: Product[]
}

export default function Home() {
  const { loading, user } = useAuth();
  const showModal = useModalMovieStore((state) => state.showModal)
  const subscription = useSubscription(user)
  const [products, setProducts] = useState<Product[]>([]);

  const [movies, setMovies] = useState<MovieResults>();

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await paymentsProducts();
      if (!productsData) return;
      setProducts(productsData);
    };
    getProducts();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      if (!moviesData)
        setMovies(moviesData);
    };
    getMovies();
  }, []);

  if (loading || subscription === null) return null;

  //if (!subscription) return <div><Plans products={products} /></div>

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

const paymentsProducts = async (): Promise<Product[]> => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => {
      console.log(error.message)
      return []
    })
  return products;
}
