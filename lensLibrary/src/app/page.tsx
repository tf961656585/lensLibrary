import { getMounts } from "../lib/data";
import Navbar from "../components/Navbar";
import MountsSection from "../components/MountsSection";
import Footer from "../components/Footer";

export default async function Home() {
  const mounts = getMounts();

  return (
    <>
      <Navbar />
      <header className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">镜头图书馆</h1>
          <p className="mt-4 text-xl">探索各种摄影卡口和镜头</p>
        </div>
      </header>
      <MountsSection mounts={mounts} />
      <Footer />
    </>
  );
}
