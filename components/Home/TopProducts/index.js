import Image from "next/image";
import Link from "next/link";
import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";

const TopProducts = ({ data }) => {
    return (
        <Card className='mb-10'>
            <CardTitle title={'Top Products'} />
            <div className="grid grid-cols-3 gap-8">
                {data.map((d, i) =>
                    <Link key={i} href={`/products?id=${d.id}`}>
                        <a className="rounded-3xl transform duration-200 hover:-translate-y-2 overflow-hidden">
                            <Image
                                src={d.image}
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

export default TopProducts;