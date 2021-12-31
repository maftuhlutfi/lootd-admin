import Link from "next/link";

const Page404 = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className='bg-linear-primary bg-clip-text text-transparent text-[144px] font-bold'>404</h1>
            <p className="mb-6 -mt-4">It Looks You're Lost.</p>
            <Link href={'/'}>
            <a className="text-xl font-bold text-indigo-500 py-3 px-6 border-2 border-indigo-500 rounded hover:bg-indigo-500 hover:text-white">BACK TO HOME</a>
            </Link>
        </div>
    );
}
 
export default Page404;