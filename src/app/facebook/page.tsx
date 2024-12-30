'use client'
import {Button} from 'react-bootstrap';
import { useRouter } from "next/navigation"

const Admin = () => {
    const router = useRouter()

    const handleOnClick = () => {
        router.push("/")
    }

    return <>
        Facebook
        <div>
            <Button variant='primary'>TV1411</Button>
            <button onClick={() => { handleOnClick() }}>Back to Home</button>
        </div>
    </>
}

export default Admin