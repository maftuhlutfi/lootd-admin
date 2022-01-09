import { useRouter } from "next/router"
import { useState } from "react"
import { updatePostStatus } from "../../../firebase/utils"
import Message from "../../shared/Message"

const Status = ({ status, id }) => {
    const router = useRouter()
    const [message, setMessage] = useState(null)

    const handleAcceptPost = async () => {
        const res = await updatePostStatus(id, 'accepted')
        setMessage({
            message: 'Post is accepted ✓',
            type: 'success'
        })
        const timeout = setTimeout(() => {
            router.reload()
        }, 1000)
        return () => clearTimeout(timeout)
    }

    const handleRejectPost = async () => {
        const res = await updatePostStatus(id, 'denied')
        setMessage({
            message: 'Post is denied X',
            type: 'error'
        })
        const timeout = setTimeout(() => {
            router.reload()
        }, 1000)
        return () => clearTimeout(timeout)
    }

    return (
        <>
            {status == 'requested' ?
                <div className="flex items-center">
                    <i className="icon-check-square bg-linear-green bg-clip-text text-4xl text-transparent mr-2 cursor-pointer" onClick={handleAcceptPost} />
                    <i className="icon-close-square bg-linear-red bg-clip-text text-4xl text-transparent cursor-pointer" onClick={handleRejectPost} />
                </div>
                :
                <div className={`flex items-center`}>
                    <i className={`${status == 'accepted' ? 'icon-check-square bg-linear-green' : 'icon-close-square bg-linear-red'} bg-clip-text text-4xl text-transparent mr-2`} />
                    <span className={`capitalize text-sm font-semibold ${status == 'accepted' ? 'text-custom-green' : 'text-custom-red'}`}>{status}</span>
                </div>
            }
            <Message type='success' {...message} className={`w-10/12 left-1/2 top-[300px] transform -translate-x-1/2 rounded-full ${message ? 'scale-1' : 'scale-0'}`} />
        </>
    )
}

export default Status