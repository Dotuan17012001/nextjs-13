import Link from 'next/link'
import x from '@/style/app.module.css'
import y from '@/style/hoidanit.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'Description bla bla',
}
export default function Home() {
  
  return (
    <>
      <ul>
        <li className={x.red} style={{margin:"20px 0"}}>
          <Link href="/blogs">
            <span className={y.red}>Blogs</span>
          </Link>
        </li>
        <li style={{margin:"20px 0"}}>
          <Link href="/youtube">
            Youtube
          </Link>
        </li>
        <li style={{margin:"20px 0"}}>
          <Link href="/tiktok">
            Tiktok
          </Link>
        </li>
        
      </ul>
     
    </>
  )
}
