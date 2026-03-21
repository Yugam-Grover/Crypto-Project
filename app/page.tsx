import { Suspense } from "react";
import CoinOverview from "./components/home/CoinOverview";
import TrendingCoin from "./components/home/TrendingCoin";

const Homepage = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<div>loading...</div>}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <TrendingCoin />
        </Suspense>
      </section>
      <section>
        <p>Coins List</p>
      </section>
    </main>
  );
};

export default Homepage;
