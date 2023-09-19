"use client"
import Link from 'next/link'
import x from '@/style/app.module.css'
import y from '@/style/hoidanit.module.css'
import TableApp from '@/components/app.table'
import { useEffect } from 'react'
import useSWR from 'swr'


export default function Home() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json())
  
  const { data, error, isLoading } = useSWR(
      'http://localhost:8000/blogs', 
      fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
  );

  console.log("check data >>>", data)

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const res =  await fetch("http://localhost:8000/blogs")
  //     const data = await res.json()
  //     console.log("check res", data)
  //   }
  //   fetchData()
  // },[])
  
 if(!data){
  return <div>Loading ... </div>
 }
  return (
    <>
    <div>{data?.length  }</div>
      <ul>
        <li className={x.red} style={{margin:"20px 0"}}>
          <Link href="/facebook">
            <span className={y.red}>Facebookkk</span>
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
      <TableApp blogs={data?.sort((a:any, b:any)=> b.id - a.id)}/>
    </>
  )
}
