import Image from "next/image";
import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";

const ActivePost = ({activePost}) => {
    if (!activePost) return '';

    const Status = () => {
        if (!activePost) return ''
        if (activePost.status == 'requested') return (
            <div className="flex items-center">
                <i className="icon-check-square bg-linear-green bg-clip-text text-4xl text-transparent mr-2 cursor-pointer"  />
                <i className="icon-close-square bg-linear-red bg-clip-text text-4xl text-transparent cursor-pointer"  />
            </div>
        )
        return (
            <div className={`flex items-center`}>
                <i className={`${activePost.status == 'accepted' ? 'icon-check-square bg-linear-green' : 'icon-close-square bg-linear-red'} bg-clip-text text-4xl text-transparent mr-2`} />
                <span className={`capitalize text-sm font-semibold ${activePost.status == 'accepted' ? 'text-custom-green' : 'text-custom-red'}`}>{activePost.status}</span>
            </div>
        )
    }

    return (
        <Card className={`shrink-0 px-0 flex-col transform min-w-[400px] w-1/3 flex`}>
            <div className="px-6">
                <CardTitle title={'OOTD Details'} />
            </div>
            <div className="relative min-h-[460px] flex-1 w-full">
                <Image src={activePost.image} layout="fill" className="flex-1 object-cover object-center" />
            </div>
            <div className="flex flex-col mt-6 px-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <Image src={activePost.user.image} width={36} height={36} className="object-cover object-center rounded-full" />
                        <div className="ml-3">
                            <p className="text-sm font-bold mb-1">{activePost.user.name}</p>
                            <p className="text-disabled text-xs">{activePost.publishedDate}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Status />
                    </div>
                </div>
                <p className="text-sm text-secondary my-6 leading-relaxed">{activePost.caption}</p>
                <div>
                    <div className="text-sm font-semibold mb-4">Local Pride Products</div>
                    <div className="flex flex-col">
                        {activePost.products.map(p => 
                            <div key={p.id} className="flex items-center mb-2 last:mb-0">
                                <Image src={p.image} width={64} height={64} className="object-contain object-center rounded-[20px]" />
                                <div className="ml-4">
                                    <p className="text-sm font-semibold mb-1">{p.name}</p>
                                    <p className="text-xs text-secondary">{p.brand}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
 
export default ActivePost;