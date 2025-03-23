import Header from './components/common/Header';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import Features from './components/home/Features';
import Footer from './components/common/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <Features />
      </main>
    </>
  );
}
