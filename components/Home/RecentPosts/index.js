import Image from "next/image";
import Link from "next/link";
import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";

const RecentPosts = () => {
    return (
        <Card>
            <CardTitle title={'Top Products'} />
            <div className="grid grid-cols-3 gap-8">
                {new Array(3).fill(null).map((d, i) => 
                    <Link key={i} href={'/products'}>
                        <a className="rounded-3xl transform duration-200 hover:-translate-y-2 overflow-hidden">
                            <Image 
                                src={`/mock-pict/post (${i+1}).jpg`} 
                                width={175} 
                                height={175} 
                                layout="responsive" 
                                className="object-cover object-center" 
                            />
                        </a>
                    </Link>
                )}
            </div>
        </Card>        
    );
}
 
export default RecentPosts;