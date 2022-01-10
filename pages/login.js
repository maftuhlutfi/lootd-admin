import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/shared/Button";
import CustomHead from "../components/shared/CustomHead";
import TextField from "../components/shared/Input/TextField";
import Message from "../components/shared/Message";
import { useAuth } from "../context/AuthUserContext";
import { getUserData } from "../firebase/utils";

const LoginPage = () => {
    const router = useRouter()
    const [input, setInput] = useState({
        email: 'admin@lootd.id',
        password: 'admin123'
    })
    const { email, password } = input
    const [errMsg, setErrMsg] = useState('')

    const { signInWithEmailAndPassword, signOut } = useAuth()

    const handleChange = e => {
        const { value, name } = e.target

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
        setErrMsg('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
            .then(authUser => {
                getUserData(authUser.user, ({ isAdmin }) => {
                    if (isAdmin) {
                        router.push('/')
                        return
                    }

                    signOut()
                    setErrMsg('User is not an admin.')
                })
            })
            .catch(err => {
                setErrMsg(err.message.split('/')[1].split('-').join(' ').replace(').', ''))
            })
    }

    return (
        <>
            <CustomHead
                title='Login - LOOTD Admin'
                description='Admin login page for LOOTD Admin'
            />
            <div className="w-screen h-screen bg-purple-light flex items-center justify-center">
                <div className="bg-white rounded-[32px] py-10 px-8 w-96">
                    <h5 className="text-xl text-center font-bold mb-2">Admin Login</h5>
                    <p className="text-sm text-secondary relative mx-auto text-center">Please login to manage local pride content.</p>
                    <form onSubmit={handleSubmit} className="w-full mt-8 flex flex-col">
                        <TextField type='email' name='email' value={email} onChange={handleChange} placeholder='Email' className='bg-purple-light mb-4' />
                        <TextField type='password' name='password' value={password} onChange={handleChange} placeholder='Password' className='bg-purple-light mb-6' />
                        <Button type='primary'>Login</Button>
                    </form>
                </div>
            </div>
            <Message type={'error'} message={errMsg} />
        </>
    );
}

export default LoginPage;