import { fetcher } from "@/lib/coingecko.actions";
import DataTable from "../DataTable";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

const TrendingCoin = async () => {
  let trendingCoin;
  try {
    trendingCoin = await fetcher<TrendingCoin>(
      "search/trending",
      undefined,
      300,
    );
  } catch (error) {
    console.error("Error fetching trending coins", error);
  }

  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "name",
      cellClassName: "name-cell",
      cell: (coin) => {
        const item = coin.item;
        return (
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: (coin) => {
        const item = coin.item;
        const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
        return (
          <div
            className={cn(
              "price-change",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}>
            {isTrendingUp ? (
              <TrendingUp width={20} height={20} />
            ) : (
              <TrendingDown width={20} height={20} />
            )}
            <span>
              {Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%
            </span>
          </div>
        );
      },
    },
    {
      header: "price",
      cellClassName: "price-cell",
      cell: (coin) => formatCurrency(coin.item.data.price),
    },
  ];
  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <DataTable
        data={trendingCoin.coins.slice(0, 6) || []}
        columns={columns}
        rowKey={(coin) => coin.item.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

export default TrendingCoin;
