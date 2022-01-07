import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserData } from "../../../firebase/utils";
import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";

const TopPost = ({ post }) => {
    const { image, publishedDate, likesCount, user } = post

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        getUserData({ uid: user.split('/')[1] }, data => setUserData(data))
    }, [])

    return (
        <Card className='min-w-[400px] w-1/3 shrink-0 px-0 flex flex-col'>
            <div className="px-6">
                <CardTitle title={'Top OOTD Post'} />
            </div>
            <div className="relative flex-1 w-full">
                <Image src={image} layout="fill" className="flex-1 object-cover object-center" />
            </div>
            <div className="flex items-center justify-between mt-6 px-6">
                <div className="flex items-center">
                    <Image src={userData ? userData.image : '/icons/default-user.svg'} width={36} height={36} className="object-cover object-center rounded-full" />
                    <div className="ml-3">
                        <p className="text-sm font-bold mb-1">{userData ? userData.displayName : ''}</p>
                        <p className="text-disabled text-xs">{publishedDate}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <i className="icon-heart text-custom-red text-xl mb-1" />
                    <p className="text-sm">{likesCount}</p>
                </div>
            </div>
        </Card>
    );
}

export default TopPost;