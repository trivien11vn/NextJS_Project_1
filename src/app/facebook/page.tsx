'use client'
import { useRouter } from "next/navigation"
const Admin = () => {
    const router = useRouter()

    const handleOnClick = () => {
        router.push("/")
    }

    return <>
        Facebook
        <div>
            <button onClick={() => { handleOnClick() }}>Back to Home</button>
        </div>
    </>
}

export default Admin