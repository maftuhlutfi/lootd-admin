import Image from "next/image";
import { useRouter } from "next/router";

const PostsList = ({ activePost, handleActivePostChange, posts }) => {
    const filterQuery = useRouter().query.filter || 'requested'

    const filteredPosts = filterQuery && filterQuery != 'all' ? posts.filter(p => p.status == filterQuery.toLowerCase()) : posts

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