import Image from "next/image";
import { useRouter } from "next/router";

const postLists = [
    {
        id: 1,
        image: '/mock-pict/post (1).jpg',
        caption: 'Ini adalah outfit keseharianku dengan hoodie dan celana jeans hitam. Siap berangkat nonton film!!!',
        publishedDate: '3 Days ago',
        status: 'requested',
        user: {
            name: 'Cantika Putri',
            image: '/mock-pict/cantika.jpg'
        },
        products: [
            {
                id: 1,
                name: 'Ventela 70s White',
                brand: 'Ventela',
                image: '/mock-pict/product (2).jpg'
            },
            {
                id: 2,
                name: 'Erigo White Cap',
                brand: 'Erigo',
                image: '/mock-pict/product (3).jpg'
            }
        ]
    },
    {
        id: 2,
        image: '/mock-pict/post (2).jpg',
        caption: 'Ini adalah outfit keseharianku dengan hoodie dan celana jeans hitam. Siap berangkat nonton film!!!',
        publishedDate: '3 Days ago',
        status: 'accepted',
        user: {
            name: 'Cantika Putri',
            image: '/mock-pict/cantika.jpg'
        },
        products: [
            {
                id: 1,
                name: 'Ventela 70s White',
                brand: 'Ventela',
                image: '/mock-pict/product (2).jpg'
            },
            {
                id: 2,
                name: 'Erigo White Cap',
                brand: 'Erigo',
                image: '/mock-pict/product (3).jpg'
            }
        ]
    },
    {
        id: 3,
        image: '/mock-pict/post (3).jpg',
        caption: 'Ini adalah outfit keseharianku dengan hoodie dan celana jeans hitam. Siap berangkat nonton film!!!',
        publishedDate: '3 Days ago',
        status: 'rejected',
        user: {
            name: 'Cantika Putri',
            image: '/mock-pict/cantika.jpg'
        },
        products: [
            {
                id: 1,
                name: 'Ventela 70s White',
                brand: 'Ventela',
                image: '/mock-pict/product (2).jpg'
            },
            {
                id: 2,
                name: 'Erigo White Cap',
                brand: 'Erigo',
                image: '/mock-pict/product (3).jpg'
            }
        ]
    }
]

const PostsList = ({activePost, handleActivePostChange}) => {
    const filterQuery = useRouter().query.filter || 'requested'

    const filteredPosts = filterQuery && filterQuery != 'All' ? postLists.filter(p => p.status == filterQuery.toLowerCase()) : postLists

    return (
        <div className={`grid ${activePost ? 'grid-cols-4' : 'grid-cols-5'} gap-8 transition-all duration-200`}>
            {filteredPosts.map(p => 
                <Image 
                    key={p.id} 
                    src={p.image} 
                    width={180} 
                    height={241} 
                    layout="responsive" 
                    className="object-cover object-center rounded-[20px] cursor-pointer hover:brightness-90 transition-all duration-200" 
                    onClick={() => handleActivePostChange(p)}
                />
            )}
        </div>
    );
}
 
export default PostsList;