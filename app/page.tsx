'use client'
import React from 'react'
import Image from 'next/image';
import DataTable from './components/DataTable';
import Link from 'next/link';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
const Homepage = () => {
  const Columns: DataTableColumn<TrendingCoin> = [
    {
      header: 'name',
      cellClassName: 'name-cell',
      cell: (coin)=>{
        const item = coin.item;
        return(
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name}/>
            <p>{item.name}</p>
          </Link>
        )
      }
    },
    {
      header: '24h Change',
      cellClassName: 'name-cell',
      cell: (coin)=>{
         const item = coin.item;
         const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
         return (
          <div className={cn('price-change', isTrendingUp? 'text-green-500':'text-red-500')}>
            <p>
              {isTrendingUp? 
              <TrendingUp width={36} height={36}/>:
              <TrendingDown width={36} height={36}/>
              }
            </p>
          </div>
         )
      }
    },
    {
      header: 'price',
      cellClassName: 'name-cell',
      cell: (coin)=>coin.item.data.price
    }
  ]

  return (
  <main className='main-container'>
    <section className='home-grid'>
      <div id='coin-overview'>
        <div className='header pt-2'>
        <Image src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png' alt='Bitcoin' width={56} height={56}/>
        <div>
          <p>Bitcon/BTC</p>
          <h1>$89,567.00</h1>
        </div>
      </div>
      </div>
      
      <div>
      <p>Trending Coins</p>
      <DataTable data={[]} columns={Columns}/>
      </div>
    </section>
    <section>
      <p>Coins List</p>
    </section>
  </main>
  )
}

export default Homepage
