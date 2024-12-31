import Link from "next/link"
import x from '@/styles/app.module.css'
import y from '@/styles/edit.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: '...',
}

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
