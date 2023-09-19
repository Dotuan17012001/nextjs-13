'use client'
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/navigation"

const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return ( 
        <>This is Facebook
        <div>
            <Button variant="success">Hoi dan IT</Button>
            <button onClick={()=>handleBtn()}>Back Home</button>
        </div>
        </>
     );
}
 
export default Facebook;