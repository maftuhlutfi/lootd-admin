import Button from "../components/shared/Button";
import CustomHead from "../components/shared/CustomHead";
import TextField from "../components/shared/Input/TextField";

const LoginPage = () => {
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
                    <form className="w-full mt-8 flex flex-col">
                        <TextField type='email' name='email' placeholder='Email' className='bg-purple-light mb-4' />
                        <TextField type='password' name='password' placeholder='Password' className='bg-purple-light mb-6' />
                        <Button>Login</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;