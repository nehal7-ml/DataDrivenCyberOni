import { Eye, Heart, View } from "lucide-react";


function BlogStats({ id, likes, views }: { id: string, likes: number, views: number }) {
    return (<>
        <div className="flex flex-col p-5 my-5  justify-center items-center">
            <Heart />
            {likes.toLocaleString()}
        </div>
        <div className="flex flex-col p-5 my-5 justify-center items-center">
            <Eye />
            {views.toLocaleString()}
        </div>

    </>);
}

export default BlogStats;