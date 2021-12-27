import Image from "next/image";
import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";

const TopPost = () => {
    return (
        <Card className='w-[400px] shrink-0 px-0 flex flex-col'>
            <div className="px-6">
                <CardTitle title={'Top OOTD Post'} />
            </div>
            <div className="relative flex-1 w-full">
                <Image src={'/mock-pict/top-post.jpg'} layout="fill" className="flex-1 object-cover object-center" />
            </div>
            <div className="flex items-center justify-between mt-6 px-6">
                <div className="flex items-center">
                    <Image src={'/mock-pict/cantika.jpg'} width={36} height={36} className="object-cover object-center rounded-full" />
                    <div className="ml-3">
                        <p className="text-sm font-bold mb-1">Cantika Putri</p>
                        <p className="text-disabled text-xs">3 days ago</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <i className="icon-heart text-custom-red text-xl mb-1" />
                    <p className="text-sm">3.000</p>
                </div>
            </div>
        </Card>
    );
}
 
export default TopPost;