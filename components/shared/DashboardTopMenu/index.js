import Image from "next/image";
import { useRef, useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const DashboardTopMenu = ({ title, subTitle }) => {
    const ref = useRef(null)
    const { signOut, authUser } = useAuth()

    const [showMenu, setShowMenu] = useState(false)

    useOnClickOutside(ref, () => setShowMenu(false))

    return (
        <div className="flex w-full items-center justify-between">
            <div>
                <span className="text-sm font-medium text-disabled mb-2">{subTitle}</span>
                <h5 className="text-2xl font-bold">{title}</h5>
            </div>
            <div ref={ref} className="relative cursor-pointer" onClick={() => setShowMenu(prev => !prev)}>
                <Image src={authUser.image || '/icons/default-user.svg'} width={48} height={48} className="object-cover object-center rounded-full" />
                <div className={`${showMenu ? 'absolute' : 'hidden'} bg-white top-full mt-2 rounded-2xl right-0 overflow-hidden p-4`}>
                    <div className="py-2 px-8 font-medium bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={() => signOut()}>Logout</div>
                </div>
            </div>
        </div>
    );
}

export default DashboardTopMenu;