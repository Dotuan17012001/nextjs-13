"use client"
import TableApp from "@/components/app.table";
import useSWR from 'swr'
const BlogsPage = () => {
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
  
 if(isLoading){
  return <div>Loading ... </div>
 }
    return ( 
        <div>
             <TableApp blogs={data?.sort((a:any, b:any)=> b.id - a.id)}/>
        </div>
     );
}
 
export default BlogsPage;