import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navList = [
    {
        title: 'Dashboard',
        icon: 'icon-category',
        link: '/'
    },
    {
        title: 'Posts',
        icon: 'icon-image',
        link: '/posts'
    },
    {
        title: 'Brands',
        icon: 'icon-star',
        link: '/brands'
    },
    {
        title: 'Products',
        icon: 'icon-bag',
        link: '/products'
    },
]

const Navigation = () => {
    const { pathname } = useRouter()

    return (
        <div className="fixed w-64 bg-white p-10 inset-0">
            <Image src='/logo-with-text.svg' width={88.22} height={48} />
            <div className="flex flex-col mt-16">
                {navList.map((n, i) => 
                    <Link href={n.link} key={i}>
                        <a className={`mb-12 flex items-center ${pathname == n.link ? 'text-primary' : 'text-disabled'}`}>
                            <i className={`${n.icon} text-2xl mr-4`} />
                            {n.title}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
}
 
export default Navigation;