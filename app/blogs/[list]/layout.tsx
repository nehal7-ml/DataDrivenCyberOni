import { Suspense } from "react";

function BlogListLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="py-32">
                <Suspense>{children}</Suspense>
            </div>
        </>
    );
}

export default BlogListLayout;