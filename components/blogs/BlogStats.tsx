import { Eye, Heart, View } from "lucide-react";


function BlogStats({ id, likes, views }: { id: string, likes: number, views: number }) {
    return (<>
        <div className="flex lg:flex-col  justify-center items-center gap-2">
            <Heart />
            {likes.toLocaleString()}
        </div>
        <div className="flex lg:flex-col  justify-center items-center gap-2">
            <Eye />
            {views.toLocaleString()}
        </div>

    </>);
}

export default BlogStats;