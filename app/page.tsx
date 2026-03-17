'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const Homepage = () => {
  const pathname = usePathname();
  return (
    <header>
        <div className='main-container inner'>
          <Link href='/'>
          <Image loading='eager' src='/Bitstream-logo.png' alt='Bitstream Logo' width={170} height={90}/>      
           </Link>
          <nav>
            <Link href='/' className={cn(
              'nav-link', {
              'isactive': pathname==='/',
               'ishome': true} )}>Home</Link>
            <p>Search Modal</p>
            <Link href='/coins' className={cn('nav-link', {'isactive': pathname==='/coins'})}>All Coins</Link>
          </nav>
    </div>
    </header>
  )
}

export default Homepage
