import React from "react";
import { fetcher } from "@/lib/coingecko.actions";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

const CoinOverview = async () => {
  let coinDetail;
  try {
    coinDetail = await fetcher<CoinDetailsData>("coins/bitcoin", {
      dex_pair_format: "symbol",
    });
  } catch (error) {
    console.error("Error fetching Coin Overview", error);
  }

  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image
          src={coinDetail.image.large}
          alt={coinDetail.name}
          width={56}
          height={56}
        />
        <div>
          <p>
            {coinDetail.name}/{coinDetail.symbol.toUpperCase()}
          </p>
          <h1>{formatCurrency(coinDetail.market_data.current_price.usd)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinOverview;
