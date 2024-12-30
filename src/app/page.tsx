'use client'

import Link from "next/link"
import x from '@/styles/app.module.css'
import y from '@/styles/edit.module.css'
import AppTableee from '@/components/app.table'
import { useEffect } from "react"
import useSWR from 'swr'

export default function Home() {

  
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href='/facebook'>
            <span className={y["red"]}>Facebook</span>  
          </Link>
        </li>
        <li style={{margin: "20px 0"}}>
          <Link href='/youtube'>Youtube</Link>
        </li>
        <li>
          <Link href='/tiktok'>Tiktok</Link>
        </li>
      </ul>
    </div>
  )
}
